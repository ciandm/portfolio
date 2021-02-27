import React from 'react';
import Heading from '../../shared/Typography/Heading';
import Paragraph from '../../shared/Typography/Paragraph';
import * as S from './styled';

const OtherProjectsIntro = () => {
  return (
    <S.Wrapper>
      <S.Container>
        <Heading type="h2" color="blackPearl" paddingBottom={1.2}>
          But wait - there's more.
        </Heading>
        <Paragraph color="blueBayoux" paddingBottom={6}>
          Check out a few of my other projects that I’ve worked on.
        </Paragraph>
      </S.Container>
    </S.Wrapper>
  );
};

export default OtherProjectsIntro;
