import Head from 'next/head';
import HomeHero from '../src/components/HomeHero';
import Projects from '../src/components/Projects';
import GetInTouchBanner from '../src/components/shared/GetInTouchBanner';
import Skills from '../src/components/Skills';
import portfolioProjects from '../src/data/portfolioProjects';

export default function Home() {
  const { design, coding } = portfolioProjects;
  const homeProjects = design
    .concat(coding)
    .filter(p => p.id === 'coding-1' || p.id === 'design-1');

  return (
    <>
      <Head>
        <title>Home | Cian Dolphin-Murray</title>
      </Head>
      <HomeHero />
      <Skills />
      <Projects
        backgroundColor="white"
        toggleDisplayed={false}
        projects={homeProjects}
      />
      <GetInTouchBanner backgroundColor="linkWater" />
    </>
  );
}
