import React from 'react';
import Head from 'next/head';
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
      <Head>
        <meta name="description" content={projectData.data.description} />
        <title>
          Portfolio | {projectData.data.title} | Cian Dolphin-Murray
        </title>
      </Head>
      <ProjectIntro backgroundColor="linkWater" {...projectData} />
      {projectData.data.carousel ? (
        <Carousel carouselImages={projectData.data.carouselImages} />
      ) : null}
      <PrintMarkdown markdown={projectData.content} />
      <Projects
        backgroundColor="white"
        toggleDisplayed={false}
        heading="But wait. There's more."
        subheading="Check out a few of my other projects that I’ve worked on."
        introDisplayed
        projects={otherProjects}
      />
      <GetInTouchBanner backgroundColor="linkWater" />
    </>
  );
}
