import React from 'react';
import PrintMarkdown from '../../src/components/markdown/PrintMarkdown';
import ProjectIntro from '../../src/components/ProjectIntro';
import Carousel from '../../src/components/Carousel';
import GetInTouchBanner from '../../src/components/shared/GetInTouchBanner';
import {
  getAllPortfolioProjects,
  getContentsBySlug,
  getRandomProjects,
} from '../../data/markdown';
import Projects from '../../src/components/Projects';

export async function getStaticPaths() {
  const posts = getAllPortfolioProjects();
  const paths = posts.map(({ slug }) => ({
    params: {
      id: slug,
    },
  }));
  return {
    fallback: false,
    paths,
  };
}

export async function getStaticProps({ params }) {
  const projectData = getContentsBySlug(params.id);
  const otherProjects = getRandomProjects(params.id);
  return {
    props: {
      otherProjects,
      projectData,
    },
  };
}

export default function PortfolioShowcase({ projectData, otherProjects }) {
  return (
    <>
      <ProjectIntro {...projectData} />
      {projectData.data.carousel ? (
        <Carousel carouselImages={projectData.data.carouselImages} />
      ) : null}
      <PrintMarkdown markdown={projectData.content} />
      <Projects
        backgroundColor="linkWater"
        toggleDisplayed={false}
        introDisplayed
        projects={otherProjects}
      />
      <GetInTouchBanner backgroundColor="white" />
    </>
  );
}
