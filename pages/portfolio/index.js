import React from 'react';
// Components
import Projects from '../../src/components/Projects';
import GetInTouchBanner from '../../src/components/shared/GetInTouchBanner';

function Portfolio() {
  return (
    <>
      <Projects backgroundColor="linkWater" toggle />
      <GetInTouchBanner backgroundColor="white" />
    </>
  );
}

export default Portfolio;
