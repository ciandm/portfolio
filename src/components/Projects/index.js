import React from 'react';
import PropTypes from 'prop-types';
import Section from '../shared/Section';
import ProjectGrid from './ProjectGrid';
import Project from './Project';
import ProjectToggle from './ProjectToggle';
import OtherProjectsIntro from './OtherProjectsIntro';

function Projects({
  backgroundColor,
  toggleDisplayed,
  introDisplayed,
  projects,
  activeDisplay,
  updateDisplay,
}) {
  return (
    <Section
      backgroundColor={backgroundColor}
      paddingS={7.2}
      paddingM={8.4}
      paddingL={9.6}
      textAlign="left"
    >
      {toggleDisplayed ? (
        <ProjectToggle
          activeDisplay={activeDisplay}
          updateDisplay={updateDisplay}
        />
      ) : null}
      {introDisplayed ? <OtherProjectsIntro /> : null}
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
  backgroundColor: PropTypes.oneOf(['blackPearl', 'white', 'linkWater']),
  introDisplayed: PropTypes.bool,
  projects: PropTypes.instanceOf(Array).isRequired,
  toggleDisplayed: PropTypes.bool.isRequired,
  updateDisplay: PropTypes.func,
};
