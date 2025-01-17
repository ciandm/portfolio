import React from 'react';
import PropTypes from 'prop-types';
// Components
import Breadcrumbs from './Breadcrumbs';
import Heading from '../shared/Typography/Heading';
import TechTags from './TechTags';
import HeroSection from '../shared/HeroSection';
import Paragraph from '../shared/Typography/Paragraph';
import ProjectLink from './ProjectLink';

function ProjectIntro({ backgroundColor, data }) {
  return (
    <HeroSection backgroundColor={backgroundColor}>
      <Breadcrumbs category={data.category} />
      <Heading color="blackPearl" type="h1" paddingBottom={0.8}>
        {data.title}
      </Heading>
      <TechTags tech={data.tech} />
      {/* If the description has more than one line in the markdown, it will be set as an array so this checks for that use case */}
      {Array.isArray(data.description) ? (
        data.description.map((d, index) => {
          return (
            <Paragraph key={index} color="blueBayoux" paddingTop={1.2}>
              {d}
            </Paragraph>
          );
        })
      ) : (
        <Paragraph color="blueBayoux" paddingTop={1.2}>
          {data.description}
        </Paragraph>
      )}
      {data.links ? <ProjectLink links={data.links} /> : null}
    </HeroSection>
  );
}

export default ProjectIntro;

ProjectIntro.propTypes = {
  backgroundColor: PropTypes.oneOf(['white', 'linkWater']).isRequired,
  data: PropTypes.shape({
    carousel: PropTypes.bool,
    carouselImages: PropTypes.arrayOf(PropTypes.object),
    category: PropTypes.oneOf(['Design', 'Coding']),
    description: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
    image: PropTypes.string,
    imageAlt: PropTypes.string,
    strapline: PropTypes.string,
    tech: PropTypes.arrayOf(PropTypes.string),
    title: PropTypes.string,
  }).isRequired,
};
