import Projects from '../src/components/Projects';
import GetInTouchBanner from '../src/components/shared/GetInTouchBanner';

export default function Home() {
  return (
    <>
      <Projects backgroundColor="white" toggle={false} />
      <GetInTouchBanner background="linkWater" />
    </>
  );
}
