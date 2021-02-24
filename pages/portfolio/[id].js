import React from 'react';
import HeroSection from '../../src/components/shared/HeroSection';
import Heading from '../../src/components/shared/Typography/Heading';
import PrintMarkdown from '../../src/components/markdown/printMarkdown';
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
      <HeroSection>
        <Heading color="blackPearl" type="h1">
          {projectData.data.title}
        </Heading>
      </HeroSection>
      <PrintMarkdown markdown={projectData.content} />
    </>
  );
}
