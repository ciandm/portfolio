---
category: "Coding"
carousel: true
carouselImages: [
  {src: "/images/photosnap/photosnap_home.jpg", alt: "Home page of Photosnap"},
  {src: "/images/photosnap/photosnap_mobile.jpg", alt: "Home page of Photosnap"},
  {src: "/images/photosnap/photosnap_stories-features.jpg", alt: "Home page of Photosnap"},
]
description: [
  "Using designs from www.frontendmentor.io to build a website for a fictional landing page, for a platform called Photosnap, which makes it easy to share for photographers to share their photos and connect with others. It included the strong use of imagery throughout, with a full-width design implemented that really helps showcase images.",
  "Please note - as this is a fictional website some links may not work properly."
]
image: "/images/photosnap/photosnap_thumbnail.jpg"
imageAlt: "Responsive Photosnap website"
links: [
  {
    github: true,
    href: "https://github.com/ciandm/photosnap",
    linkText: "View on GitHub",
  },
  {
    href: "https://lucid-wright-accd19.netlify.app/",
    linkText: "View live site",
  }
]
strapline: "React & SCSS"
tech: ["React", "SCSS"]
title: "Responsive Photosnap website"
---

### Code snippets

#### Responsive images
As the design was supplied with different image sizes for each device, I had to create a responsive image component that allowed me to use all of them and let the browser determine which image to show.

```
const ResponsiveImage = ({
  images,
  alt,
  classes
}) => {
  return (
    <img
      className={classes}
      src={images.mobile}
      srcSet={`${images.mobile} 300w, 
               ${images.tablet} 768w, 
               ${images.desktop} 1032w`
             }
      alt={alt}
    />
  )
}

export default ResponsiveImage

ResponsiveImage.propTypes = {
  images: PropTypes.object.isRequired,
  alt: PropTypes.string.isRequired,
  classes: PropTypes.string,
}
```

---

#### Plan comparison
For the plan comparison, there is a significant change moving from mobile to tablet in terms of the design. The table headers were hidden and placed along each row, which required some forward planning when laying out the HTML markup. 

```
function PlanComparison({
  comparison
}) {
  return (
    <section className="comparison">
      <div className="comparison__wrapper">
        <h3 className="comparison__title">Compare</h3>
        <table className="comparison__table">
          <thead className="comparison__head">
            <tr className="comparison__row">
              <th className="comparison__header comparison__header--head">
                The features
              </th>
              <th className="comparison__header comparison__header--head">
                Basic
              </th>
              <th className="comparison__header comparison__header--head">
                Pro
              </th>
              <th className="comparison__header comparison__header--head">
                Business
              </th>
            </tr>
          </thead>
          <tbody className="comparison__body">
            {
              comparison.map(c => (
                <TableRow
                  key={c.id}
                  {...c}
                />
              ))
            }
          </tbody>
        </table>
      </div>
    </section>
  )
}

// TableRow.jsx

const TableRow = ({
  title,
  availability
}) => {
  return (
    <tr className="comparison__row comparison__row--inner">
      <th className="comparison__header comparison__header--inner">
        {title}
      </th>
      {
        Object.keys(availability).map((key, index) => (
          <td
            className="comparison__cell"
            key={index}
          >
            <div className="comparison__column">
              <span className="comparison__plan">{key}</span>
              {/* Check if is set to true to render check mark */}
              <span className={`comparison__check ${availability[key] ? 'comparison__check--checked' : ''}`} />
            </div>
          </td>
        ))
      }
    </tr>
  )
}

export default TableRow

```