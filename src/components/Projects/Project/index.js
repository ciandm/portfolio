import React from 'react';
import * as S from './styled';
import ProjectImage from './ProjectImage/index';
import Strapline from '../../shared/Typography/Strapline';
import Heading from '../../shared/Typography/Heading';
import Paragraph from '../../shared/Typography/Paragraph';
import Button from '../../shared/Button';

function Project({ strapline, heading, description, id, image, imageAlt }) {
  return (
    <S.Project>
      <S.ImageWrapper>
        <S.ImageContainer>
          <ProjectImage src={image} alt={imageAlt} />
        </S.ImageContainer>
      </S.ImageWrapper>
      <S.Content>
        <Strapline>{strapline}</Strapline>
        <Heading color="white" type="h3" paddingBottom={0.4}>
          {heading}
        </Heading>
        <Paragraph color="white" paddingBottom={2.4}>
          {description}
        </Paragraph>
        <Button variation="primary" as="a" href={`/portfolio/${id}`}>
          View project
        </Button>
      </S.Content>
    </S.Project>
  );
}

export default Project;
