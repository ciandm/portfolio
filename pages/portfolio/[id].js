import React from 'react';
import PrintMarkdown from '../../src/components/markdown/printMarkdown';
import ProjectIntro from '../../src/components/ProjectIntro';
import Carousel from '../../src/components/Carousel';
import {
  getAllPortfolioProjects,
  getContentsBySlug,
} from '../../data/markdown';

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
  return {
    props: {
      projectData,
    },
  };
}

export default function PortfolioShowcase({ projectData }) {
  return (
    <>
      <ProjectIntro {...projectData} />
      <Carousel />
      <PrintMarkdown markdown={projectData.content} />
    </>
  );
}
