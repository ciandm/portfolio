---
category: "Coding"
carousel: true
carouselImages: [
  {src: "/images/designo/designo_home.jpg", alt: "Home page of Photosnap"},
  {src: "/images/designo/designo_mobile.jpg", alt: "Home page of Photosnap"},
  {src: "/images/designo/designo_contact.jpg", alt: "Home page of Photosnap"},
]
date: "2021"
description: [
  "I built a website for a fictional design agency called Designo using React and Styled Components, with a LeafletJS integration for displaying addressed on maps.",
  "Please note - as this is a fictional website some links may not work properly."
]
links: [
  {
    github: true,
    href: "https://github.com/ciandm/designo",
    linkText: "View on GitHub",
  },
  {
    href: "https://determined-spence-e85c1d.netlify.app/",
    linkText: "View live site",
  }
]
strapline: "React & Styled Components"
tech: ["React", "Styled Components", "LeafletJS"]
thumbnail: "/images/designo/designo_thumbnail.jpg"
title: "Designo website with LeafletJS integration"
---

### Code snippets

#### Reusable pattern background
Across multiple pages was a repeatable leaf pattern with different position and rotation for each pages. Rather than create this multiple times on each section, I extracted it into its own component and used props to position it, after determining the position through Figma

```javascript
const LeafPattern = ({
  left,
  right,
  top,
  rotation
}) => {

  const isDesktop = useWindowSize() > 1032;

  if (!isDesktop) return null;

  return (
    <S.LeafContainer
      left={left}
      right={right}
      top={top}
    >
      <S.Leaf
        rotation={rotation}
      />
    </S.LeafContainer>
  )
}
```

---

#### Window size hook for a responsive nav
For the plan comparison, there is a significant change moving from mobile to tablet in terms of the design. The table headers were hidden and placed along each row, which required some forward planning when laying out the HTML markup. 

```javascript
function Nav() {

  const [open, setOpen] = useState(false);
  // deviating from the theme media queries as this is the width where nav begins wrapping
  const isMobile = useWindowSize() < 680;

  const handleNavToggle = () => {
    setOpen(prevOpen => !prevOpen);
    document.body.classList.toggle("body--no-scroll");
  }

  return (
    <S.Nav>
      <S.NavWrapper
        open={open}
      >
        <S.LogoContainer
          to="/"
        >
          <S.Logo
            src={logo}
            alt="Designo logo"
          />
        </S.LogoContainer>
        {isMobile &&
          <S.Hamburger
            open={open}
            onClick={() => handleNavToggle()}
          />
        }
        <S.NavItems
          open={open}
        >
          <S.NavLink
            to={ROUTES.ABOUT}
          >Our company</S.NavLink>
          <S.NavLink
            to={ROUTES.LOCATIONS}
          >Locations</S.NavLink>
          <S.NavLink
            to={ROUTES.CONTACT}
          >Contact</S.NavLink>
        </S.NavItems>
      </S.NavWrapper>
    </S.Nav>
  )
}
```