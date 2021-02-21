import React from 'react';
import HeroSection from '../../src/components/shared/HeroSection';
import Heading from '../../src/components/shared/Typography/Heading';
import {
  getPortfolioProjectIds,
  getPortfolioProjectById,
} from '../../src/data/portfolioProjects';

export async function getStaticPaths() {
  const paths = getPortfolioProjectIds();
  return {
    fallback: false,
    paths,
  };
}

export async function getStaticProps({ params }) {
  const projectData = getPortfolioProjectById(params.id);
  return {
    props: {
      projectData,
    },
  };
}

export default function PortfolioShowcase({ projectData }) {
  return (
    <HeroSection>
      <Heading>{projectData.heading}</Heading>
    </HeroSection>
  );
}
