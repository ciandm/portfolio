import React, { useState } from 'react';
import Head from 'next/head';
// Components
import Projects from '../../src/components/Projects';
import GetInTouchBanner from '../../src/components/shared/GetInTouchBanner';
import HeroSection from '../../src/components/shared/HeroSection';
import Heading from '../../src/components/shared/Typography/Heading';
import Paragraph from '../../src/components/shared/Typography/Paragraph';
import { getAllPortfolioProjects } from '../../data/markdown';

export async function getStaticProps() {
  const projects = await getAllPortfolioProjects();
  return {
    props: {
      projects: await Promise.all(projects),
    },
  };
}

function Portfolio({ projects }) {
  const [activeDisplay, setActiveDisplay] = useState('Design');
  const updateDisplay = choice => setActiveDisplay(choice);
  return (
    <>
      <Head>
        <title>Portfolio | Cian Dolphin-Murray</title>
      </Head>
      <HeroSection backgroundPattern>
        <Heading type="h1" color="blackPearl" paddingBottom={0.4}>
          Portfolio
        </Heading>
        <Paragraph color="blueBayoux">
          I’m very proud of the work I’ve produced, and I am constantly trying
          to improve upon it and become a stronger designer and developer.
        </Paragraph>
        <Paragraph color="blueBayoux">
          Feel free to look through the selection of some of my work, which
          ranges from branding to illustrations to front-end development.
        </Paragraph>
      </HeroSection>
      <Projects
        backgroundColor="linkWater"
        toggleDisplayed
        updateDisplay={updateDisplay}
        activeDisplay={activeDisplay}
        projects={projects.filter(p => p.data.category === activeDisplay)}
      />
      <GetInTouchBanner backgroundColor="white" portfolioPageCurrent />
    </>
  );
}

export default Portfolio;
