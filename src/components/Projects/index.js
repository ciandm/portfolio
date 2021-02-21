import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Section from '../shared/Section';
import ProjectGrid from './ProjectGrid';
import Project from './Project';
import ProjectToggle from './ProjectToggle';

function Projects({ backgroundColor, toggleDisplayed }) {
  const [activeDisplay, setActiveDisplay] = useState('design');
  const updateDisplay = choice => setActiveDisplay(choice);

  return (
    <Section
      backgroundColor={backgroundColor}
      paddingS={7.2}
      paddingM={8.4}
      paddingL={9.6}
    >
      {toggleDisplayed ? (
        <ProjectToggle
          activeDisplay={activeDisplay}
          updateDisplay={updateDisplay}
        />
      ) : null}
      <ProjectGrid>
        <Project />
        <Project />
      </ProjectGrid>
    </Section>
  );
}

export default Projects;

Projects.propTypes = {
  backgroundColor: PropTypes.oneOf(['blackPearl', 'white', 'linkWater']),
  toggleDisplayed: PropTypes.bool.isRequired,
};
