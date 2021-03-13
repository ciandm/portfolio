import Head from 'next/head';
import { getProjectsBySlug } from '../data/markdown';
import HomeHero from '../src/components/HomeHero';
import Projects from '../src/components/Projects';
import GetInTouchBanner from '../src/components/shared/GetInTouchBanner';
import Skills from '../src/components/Skills';

export async function getStaticProps() {
  const projects = getProjectsBySlug([
    'personal-brochure',
    'designo',
    'registration-page',
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
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="I am a digital designer based in Dublin, Ireland with a keen interest in web design and development. I’ve had exposure to multiple unique areas of digital design and development in my career, and I am always eager to learn and improve my skills while delivering results."
        />
        <meta charSet="utf-8" />
      </Head>
      <HomeHero />
      <Skills />
      <Projects
        backgroundColor="white"
        heading="Some recent work"
        extraHeadingMargin
        toggleDisplayed={false}
        projects={projects}
      />
      <GetInTouchBanner backgroundColor="linkWater" />
    </>
  );
}
