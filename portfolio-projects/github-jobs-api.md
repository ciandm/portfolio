---
category: "Coding"
carousel: true
carouselImages: [
  {src: "/images/github-jobs-api/github-jobs-api_home.jpg", alt: "Home page of the GitHub jobs listing"},
  {src: "/images/github-jobs-api/github-jobs-api_job-listing.jpg", alt: "Page for the selected job"},
]
description: "Using the GitHub Jobs API and React, I built out a site that displays a list of jobs currently advertised on GitHub Jobs.
              Included is a fully functional filter, where you can filter by company, title, location, full time or part time and more.
              There is also a dark mode available, which detects the users preference on load, and is easily switchable."
image: "/images/github-jobs-api/github-jobs-api_thumbnail.jpg"
imageAlt: "Website to display jobs using the GitHub Jobs API"
links: [
  {
    github: true,
    href: "https://github.com/ciandm/github-jobs-api",
    linkText: "View on GitHub",
  },
  {
    href: "https://stupefied-bassi-21ad4c.netlify.app/",
    linkText: "View live site",
  }
]
strapline: "React & GitHub Jobs API"
tech: ["React", "Styled Components", "GitHub Jobs API", "axios"]
title: "Website to display jobs using the GitHub Jobs API"
---

### Code snippets

#### useFetchJobs custom hook
To fetch the jobs from the GitHub Jobs API, I used **axios** to send the HTTP requests as this made it more 
user friendly to add parameters to the query. These parameters were used when filtering by jobs, and also
to return the result as markdown, which I could then style and print out using **React Markdown**. As there were
CORS issues here, **I deployed a CORS Anywhere** server to Heroku (*based off of https://github.com/Rob--W/cors-anywhere*)
to act as a proxy and negate the CORS problem.

```
import { useEffect, useReducer } from 'react'
import axios from 'axios';

const ACTIONS = {
  NEW_REQUEST: 'new-request',
  HAS_LOAD_MORE: 'has-load-more',
  GET_DATA: 'get-data',
  ERROR: 'error',
  LOAD_MORE: 'load-more'
}

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.NEW_REQUEST:
      return {
        loading: true,
        jobs: []
      }
    case ACTIONS.LOAD_MORE:
      return {
        ...state,
        jobs: [...action.payload, ...state.jobs]
      }
    case ACTIONS.HAS_LOAD_MORE:
      return {
        ...state,
        hasLoadMore: action.payload.hasLoadMore
      }
    case ACTIONS.GET_DATA:
      return {
        ...state,
        loading: false,
        jobs: action.payload.jobs
      }
    case ACTIONS.ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        jobs: []
      }
    default:
      return state;
  }
}

const API_URL = 'https://boiling-coast-02867.herokuapp.com/https://jobs.github.com/positions.json';

const useFetchJobs = (params, page) => {
  const [state, dispatch] = useReducer(reducer, { jobs: [], loading: true, hasLoadMore: false });

  // fetch jobs
  useEffect(() => {
    const cancelToken1 = axios.CancelToken.source();
    dispatch({ type: ACTIONS.NEW_REQUEST });
    axios.get(API_URL, {
      cancelToken: cancelToken1.token,
      params: {
        ...params,
        markdown: true,
        page
      }
    })
      .then((res) => {
        dispatch({ type: ACTIONS.GET_DATA, payload: { jobs: res.data } });
      })
      .catch(error => {
        if (axios.isCancel) return;
        dispatch({ type: ACTIONS.ERROR, payload: error })
      })

    // fetch page + 1 to check if user can load more jobs
    const cancelToken2 = axios.CancelToken.source();
    axios.get(API_URL, {
      cancelToken: cancelToken2.token,
      params: {
        ...params,
        page: page + 1
      }
    })
      .then((res) => {
        dispatch({ type: ACTIONS.HAS_LOAD_MORE, payload: { hasLoadMore: res.data.length !== 0 } });
      })
      .catch(error => {
        if (axios.isCancel) return;
        dispatch({ type: ACTIONS.ERROR, payload: error })
      })

    return () => {
      cancelToken1.cancel();
      cancelToken2.cancel();
    }
  }, [params, page])

  return state;
}
```
