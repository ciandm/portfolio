import React from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';
import * as S from './styled';

const CarouselImage = ({ imageSrc, alt }) => {
  return (
    <S.ImageContainer>
      <Image src={imageSrc} alt={alt} layout="fill" objectFit="cover" />
    </S.ImageContainer>
  );
};

export default CarouselImage;

CarouselImage.propTypes = {
  alt: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
};
