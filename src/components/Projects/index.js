import React from 'react';
import PropTypes from 'prop-types';
import Section from '../shared/Section';
import ProjectGrid from './ProjectGrid';
import Project from './Project';
import ProjectToggle from './ProjectToggle';
import ProjectsIntro from './ProjectsIntro';

function Projects({
  backgroundColor,
  extraHeadingMargin,
  toggleDisplayed,
  heading,
  subheading,
  projects,
  alignHeading,
  activeDisplay,
  updateDisplay,
}) {
  return (
    <Section
      backgroundColor={backgroundColor}
      paddingS={7.2}
      paddingM={8.4}
      paddingL={9.6}
    >
      {heading ? (
        <ProjectsIntro
          extraHeadingMargin={extraHeadingMargin}
          heading={heading}
          subheading={subheading}
          alignHeading={alignHeading}
        />
      ) : null}
      {toggleDisplayed ? (
        <ProjectToggle
          activeDisplay={activeDisplay}
          updateDisplay={updateDisplay}
        />
      ) : null}
      <ProjectGrid>
        {projects.map(project => (
          <Project key={project.slug} slug={project.slug} {...project.data} />
        ))}
      </ProjectGrid>
    </Section>
  );
}

export default Projects;

Projects.propTypes = {
  activeDisplay: PropTypes.oneOf(['Design', 'Coding']),
  alignHeading: PropTypes.oneOf(['center', 'left']),
  backgroundColor: PropTypes.oneOf(['blackPearl', 'white', 'linkWater']),
  heading: PropTypes.string,
  projects: PropTypes.instanceOf(Array).isRequired,
  subheading: PropTypes.string,
  toggleDisplayed: PropTypes.bool.isRequired,
  updateDisplay: PropTypes.func,
};
