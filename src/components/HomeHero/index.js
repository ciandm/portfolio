import React from 'react';
import * as S from './styled';
// Components
import Section from '../shared/Section';
import Heading from '../shared/Typography/Heading';
import Paragraph from '../shared/Typography/Paragraph';
import Button from '../shared/Button';
// Hooks
import useWindowSize from '../../hooks/useWindowSize';
import ProfileImage from './ProfileImage';

function HomeHero() {
  const isDesktop = useWindowSize() > 1110;
  return (
    <Section backgroundColor="white" paddingS={6} paddingM={7.2} paddingL={8.4}>
      <S.Wrapper>
        <S.Content>
          <Heading type="h1" color="blackPearl">
            Hello - I'm Cian.
          </Heading>
          <Paragraph color="blueBayoux">
            I am a digital designer based in Dublin, Ireland with a keen
            interest in web design and development.
          </Paragraph>
          <Paragraph color="blueBayoux">
            I currently work as a Digital Designer for CurrencyFair, an online
            global money exchange company.
          </Paragraph>
          <S.Buttons>
            <Button variation="primary" as="a" href="/portfolio">
              View my portfolio
            </Button>
            <Button variation="secondary" as="a" href="/contact">
              Get in touch
            </Button>
          </S.Buttons>
        </S.Content>
        {isDesktop ? (
          <S.ImageContainer>
            <ProfileImage />
          </S.ImageContainer>
        ) : null}
      </S.Wrapper>
    </Section>
  );
}

export default HomeHero;
