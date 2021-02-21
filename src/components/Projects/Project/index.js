import React from 'react';
import * as S from './styled';
import ProjectImage from './ProjectImage/index';
import Strapline from '../../shared/Typography/Strapline';
import Heading from '../../shared/Typography/Heading';
import Paragraph from '../../shared/Typography/Paragraph';
import Button from '../../shared/Button';

function Project() {
  return (
    <S.Project>
      <S.ImageWrapper>
        <S.ImageContainer>
          <ProjectImage />
        </S.ImageContainer>
      </S.ImageWrapper>
      <S.Content>
        <Strapline>Branding</Strapline>
        <Heading color="white" type="h3" paddingBottom={0.4}>
          Created a brand book for CurrencyFair
        </Heading>
        <Paragraph color="white" paddingBottom={2.4}>
          Developed an updated and in-depth brand book for CurrencyFair, to
          improve consistency across the brand as we began to scale and enter
          more countries.
        </Paragraph>
        <Button variation="primary" as="a" href="/portfolio">
          View project
        </Button>
      </S.Content>
    </S.Project>
  );
}

export default Project;
