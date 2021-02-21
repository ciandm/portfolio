const portfolioProjects = {
  coding: [
    {
      description:
        'Built a website for a fictional company, Designo, based off of Figma designs using React and Styled Components.',
      heading: 'Responsive Designo website',
      href: '/portfolio',
      id: 'coding-1',
      image: '/images/image-placeholder.jpg',
      imageAlt: 'placeholder',
      strapline: 'Coding',
    },
    {
      description:
        'Built a website for a fictional company, Designo, based off of Figma designs using React and Styled Components.',
      heading: 'Responsive Designo website',
      href: '/portfolio',
      id: 'coding-2',
      image: '/images/image-placeholder.jpg',
      imageAlt: 'placeholder',
      strapline: 'Coding',
    },
    {
      description:
        'Built a website for a fictional company, Designo, based off of Figma designs using React and Styled Components.',
      heading: 'Responsive Designo website',
      href: '/portfolio',
      id: 'coding-3',
      image: '/images/image-placeholder.jpg',
      imageAlt: 'placeholder',
      strapline: 'Coding',
    },
    {
      description:
        'Built a website for a fictional company, Designo, based off of Figma designs using React and Styled Components.',
      heading: 'Responsive Designo website',
      href: '/portfolio',
      id: 'coding-4',
      image: '/images/image-placeholder.jpg',
      imageAlt: 'placeholder',
      strapline: 'Coding',
    },
  ],
  design: [
    {
      description:
        'Developed an updated and in-depth brand book for CurrencyFair, to improve consistency across the brand as we began to scale and enter more countries.',
      heading: 'Created a brand book for CurrencyFair',
      href: '/portfolio',
      id: 'design-1',
      image: '/images/image-placeholder.jpg',
      imageAlt: 'placeholder',
      strapline: 'Branding',
    },
    {
      description:
        'Developed an updated and in-depth brand book for CurrencyFair, to improve consistency across the brand as we began to scale and enter more countries.',
      heading: 'Created a brand book for CurrencyFair',
      href: '/portfolio',
      id: 'design-2',
      image: '/images/image-placeholder.jpg',
      imageAlt: 'placeholder',
      strapline: 'Branding',
    },
    {
      description:
        'Developed an updated and in-depth brand book for CurrencyFair, to improve consistency across the brand as we began to scale and enter more countries.',
      heading: 'Created a brand book for CurrencyFair',
      href: '/portfolio',
      id: 'design-3',
      image: '/images/image-placeholder.jpg',
      imageAlt: 'placeholder',
      strapline: 'Branding',
    },
    {
      description:
        'Developed an updated and in-depth brand book for CurrencyFair, to improve consistency across the brand as we began to scale and enter more countries.',
      heading: 'Created a brand book for CurrencyFair',
      href: '/portfolio',
      id: 'design-4',
      image: '/images/image-placeholder.jpg',
      imageAlt: 'placeholder',
      strapline: 'Branding',
    },
  ],
};

export default portfolioProjects;

export function getPortfolioProjectIds() {
  const { coding, design } = portfolioProjects;

  return coding.concat(design).map(p => {
    return {
      params: {
        id: p.id,
      },
    };
  });
}

export function getPortfolioProjectById(id) {
  const { coding, design } = portfolioProjects;

  const project = coding.concat(design).filter(p => p.id === id)[0];

  return {
    id,
    ...project,
  };
}
