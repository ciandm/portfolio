import React from 'react';
import * as S from './styled';
// Components
import Strapline from '../shared/Typography/Strapline';
import Heading from '../shared/Typography/Heading';
import Paragraph from '../shared/Typography/Paragraph';
import Section from '../shared/Section';
import Skill from './Skill';
import Button from '../shared/Button';

function Skills() {
  return (
    <Section
      backgroundColor="linkWater"
      paddingS={7.2}
      paddingM={8.4}
      paddingL={9.6}
    >
      <S.Wrapper>
        <S.Intro>
          <Strapline>Key strengths, not exhaustive</Strapline>
          <Heading color="blackPearl" paddingBottom={0.4} type="h2">
            What I can bring to the table
          </Heading>
          <Paragraph color="blueBayoux" paddingBottom={4.8}>
            I’ve had exposure to multiple unique areas of digital design and
            development in my career, and I am always eager to learn and improve
            my skills while delivering results.
          </Paragraph>
        </S.Intro>
        <S.SkillsGrid>
          <Skill
            iconBackground="fringyFlower"
            heading="Graphic Design"
            paragraph="Experience in print and digital design including branding, illustrations, visual identity and marketing assets."
          />
          <Skill
            iconBackground="cinderella"
            heading="Graphic Design"
            paragraph="Experience in print and digital design including branding, illustrations, visual identity and marketing assets."
          />
          <Skill
            iconBackground="cherub"
            heading="Graphic Design"
            paragraph="Experience in print and digital design including branding, illustrations, visual identity and marketing assets."
          />
          <Skill
            iconBackground="selago"
            heading="Graphic Design"
            paragraph="Experience in print and digital design including branding, illustrations, visual identity and marketing assets."
          />
        </S.SkillsGrid>
        <S.Buttons>
          <Button variation="primary" as="a" href="/portfolio">
            View my portfolio
          </Button>
          <Button variation="secondary" as="a" href="/contact">
            Get in touch
          </Button>
        </S.Buttons>
      </S.Wrapper>
    </Section>
  );
}

export default Skills;
