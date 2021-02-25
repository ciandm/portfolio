import React from 'react';
// Components
import Breadcrumbs from './Breadcrumbs';
import Heading from '../shared/Typography/Heading';
import TechTags from './TechTags';
import HeroSection from '../shared/HeroSection';
import Paragraph from '../shared/Typography/Paragraph';

function ProjectIntro({ data, content }) {
  return (
    <HeroSection>
      <Breadcrumbs category={data.category} />
      <Heading color="blackPearl" type="h1" paddingBottom={0.4}>
        {data.title}
      </Heading>
      <Paragraph color="blueBayoux" paddingBottom={1.2}>
        {data.description}
      </Paragraph>
      <TechTags tech={data.tech} />
    </HeroSection>
  );
}

export default ProjectIntro;
