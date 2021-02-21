import HomeHero from '../src/components/HomeHero';
import Projects from '../src/components/Projects';
import GetInTouchBanner from '../src/components/shared/GetInTouchBanner';
import Skills from '../src/components/Skills';

export default function Home() {
  return (
    <>
      <HomeHero />
      <Skills />
      <Projects backgroundColor="white" toggleDisplayed={false} />
      <GetInTouchBanner backgroundColor="linkWater" />
    </>
  );
}
