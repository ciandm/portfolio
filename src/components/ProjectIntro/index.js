import React from 'react';
import PropTypes from 'prop-types';
// Components
import Breadcrumbs from './Breadcrumbs';
import Heading from '../shared/Typography/Heading';
import TechTags from './TechTags';
import HeroSection from '../shared/HeroSection';
import Paragraph from '../shared/Typography/Paragraph';

function ProjectIntro({ data, content }) {
  return (
    <HeroSection>
      <Breadcrumbs category={data.category} />
      <Heading color="blackPearl" type="h1" paddingBottom={0.4}>
        {data.title}
      </Heading>
      <Paragraph color="blueBayoux" paddingBottom={1.2}>
        {data.description}
      </Paragraph>
      <TechTags tech={data.tech} />
    </HeroSection>
  );
}

export default ProjectIntro;

ProjectIntro.propTypes = {
  data: PropTypes.shape({
    carousel: PropTypes.bool,
    carouselImages: PropTypes.arrayOf(PropTypes.string),
    category: PropTypes.oneOf(['Design', 'Coding']),
    description: PropTypes.string,
    image: PropTypes.string,
    imageAlt: PropTypes.string,
    strapline: PropTypes.string,
    tech: PropTypes.arrayOf(PropTypes.string),
    title: PropTypes.string,
  }).isRequired,
};
