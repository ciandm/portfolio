import React from 'react';
import * as S from './styled';
import ProjectImage from './ProjectImage/index';
import Strapline from '../../shared/Typography/Strapline';
import Heading from '../../shared/Typography/Heading';
import Button from '../../shared/Button';

function Project({ slug, strapline, title, image, imageAlt }) {
  return (
    <S.Project href={`portfolio/${slug}`}>
      <S.Header>
        <Strapline>{strapline}</Strapline>
        <Heading color="blackPearl" type="h4">
          {title}
        </Heading>
      </S.Header>
      <S.ImageContainer>
        <ProjectImage src={image} alt={imageAlt} />
      </S.ImageContainer>
      <S.Footer>
        <S.Date>2020</S.Date>
        <Button variation="secondary" as="button" tabIndex="-1">
          View project
        </Button>
      </S.Footer>
    </S.Project>
  );
}

export default Project;
