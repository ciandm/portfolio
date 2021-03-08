---
category: "Coding"
carousel: true
carouselImages: [
  {src: "/images/coffeeroasters/coffeeroasters_subscription.jpg", alt: "Home page of Photosnap"},
  {src: "/images/coffeeroasters/coffeeroasters_home.jpg", alt: "Home page of Photosnap"},
  {src: "/images/coffeeroasters/coffeeroasters_about.jpg", alt: "Home page of Photosnap"},
]
description: "A website for a fictional company, Coffeeroasters, detailing who they are and their processes with an interactive subscription selection with multiple options and steps involved to selecting the perfect plan for each customer. Designs from www.frontendmentor.io"
image: "/images/coffeeroasters/coffeeroasters_thumbnail.jpg"
imageAlt: "Coffeeroasters website with interactive subscription selection"
links: [
  {
    github: true,
    href: "https://github.com/ciandm/coffeeroasters",
    linkText: "View on GitHub",
  },
  {
    href: "https://blissful-kalam-525627.netlify.app/",
    linkText: "View live site",
  }
]
strapline: "React & Styled Components"
tech: ["React", "Styled Components"]
title: "Coffeeroasters website with interactive subscription selection"
---

### Code snippets

#### Creating the interactive subscription selection
Figuring out how to create this interactive component was a fun challenge. As the subscription was shared across multiple components - the subscription selection, step list and modal - I created a  provider with a useSubscription hook that allowed the components mentioned to access this data. As there was sometimes multiple actions happening every time a user selected an option, I used a reducer. This allowed me to solve the complex state management with easy to follow actions.

```javascript
const SubscriptionContext = createContext({
  subscription: {},
  nextStep: null,
  selectOption: () => { },
})

const useSubscription = () => useContext(SubscriptionContext);

const INITIAL_STATE = {
  preference: '',
  type: '',
  weight: '',
  grind: '',
  delivery: ''
}

const ACTIONS = {
  SELECT: 'select',
  DESELECT: 'deselect',
  RESET_GRIND: 'reset-grind',
  INCREMENT_CURRENT_STEP: 'increment-current-step',
  DECREMENT_CURRENT_STEP: 'decrement-current-step',
  INCREMENT_STEPS_COMPLETED: 'increment-steps-completed',
  DECREMENT_STEPS_COMPLETED: 'decrement-steps-completed'
}

function reducer(state, action) {
  switch (action.type) {
    // select the option
    case ACTIONS.SELECT:
      return {
        ...state,
        selection: {
          ...state.selection,
          [action.payload.id]: action.payload.name,
        }
      };
    // simply deselect the option
    case ACTIONS.DESELECT:
      return {
        ...state,
        selection: {
          ...state.selection,
          [action.payload.id]: ''
        }
      }
    // when user selects capsules, remove any grind selection
    case ACTIONS.RESET_GRIND:
      return {
        ...state,
        selection: {
          ...state.selection,
          grind: ''
        }
      }
    // current step refers to next accordion to animate in - it will not be decremented as it does not need to close accordions
    case ACTIONS.INCREMENT_CURRENT_STEP:
      return {
        ...state,
        currentStep: state.currentStep + action.payload.amount
      }
    case ACTIONS.DECREMENT_CURRENT_STEP: 
      return {
        ...state,
        currentStep: state.currentStep - action.payload.amount
      }
    // incrementing and decrementing steps completed, enables use of button when completed. That final number is minus 1 if capsules is selected.
    case ACTIONS.INCREMENT_STEPS_COMPLETED:
      return {
        ...state,
        stepsCompleted: state.stepsCompleted + 1
      }
    case ACTIONS.DECREMENT_STEPS_COMPLETED:
      return {
        ...state,
        stepsCompleted: state.stepsCompleted - 1
      }
    default:
      return state
  }
}

function SubscriptionProvider({ children }) {

  const [subscription, dispatch] = useReducer(reducer, {
    selection: INITIAL_STATE,
    currentStep: 1,
    stepsCompleted: 0
  });


  const selectOption = option => {
    // if the user has selected one that is already selected, unselect it
    if (subscription.selection[option.id] === option.name) {
      dispatch({
        type: ACTIONS.DESELECT,
        payload: {
          id: option.id,
        }
      });
      dispatch({
        type: ACTIONS.DECREMENT_CURRENT_STEP,
        payload: {
          amount: 1
        }
      })
      dispatch({
        type: ACTIONS.DECREMENT_STEPS_COMPLETED
      })
      return;
    }

    // if user selects one that doesn't already have something selected, increment the steps completed
    if (subscription.selection[option.id] === '') {
      dispatch({
        type: ACTIONS.INCREMENT_STEPS_COMPLETED
      })

      // increment current step, to animate in accordion of next question. If the user has selected Capsules and the 4th question is disabled, increment by 2. 
      // 5 is the limit of questions, so it should not extend beyond this.
      if (subscription.currentStep < 5) {
        dispatch({
          type: ACTIONS.INCREMENT_CURRENT_STEP,
          payload: {
            amount: subscription.selection.preference === 'Capsule' && subscription.currentStep === 3 ? 2 : 1
          }
        })
      }
    }

    // select the option the user has chosen
    dispatch({
      type: ACTIONS.SELECT,
      payload: {
        id: option.id,
        name: option.name
      }
    });

    // if the user selects capsule, reset grind option
    if (option.name === 'Capsule') {
      dispatch({
        type: ACTIONS.RESET_GRIND
      })
      // if capsule is selected and the user has already selected something for grind, decrement the steps completed.
      if (subscription.selection.grind !== '') {
        dispatch({
          type: ACTIONS.DECREMENT_STEPS_COMPLETED
        })
      }
    }
  }

  return (
    <SubscriptionContext.Provider
      value={{
        subscription,
        selectOption
      }}
    >
      {children}
    </SubscriptionContext.Provider>
  )
}
```