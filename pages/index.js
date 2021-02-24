import Head from 'next/head';
import { getProjectsBySlug } from '../data/markdown';
import HomeHero from '../src/components/HomeHero';
import Projects from '../src/components/Projects';
import GetInTouchBanner from '../src/components/shared/GetInTouchBanner';
import Skills from '../src/components/Skills';

export async function getStaticProps() {
  const projects = getProjectsBySlug([
    'brand-book',
    'responsive-designo-website',
  ]);
  return {
    props: {
      projects,
    },
  };
}

export default function Home({ projects }) {
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
        projects={projects}
      />
      <GetInTouchBanner backgroundColor="linkWater" />
    </>
  );
}
