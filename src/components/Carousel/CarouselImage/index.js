import React from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';
import * as S from './styled';

const CarouselImage = ({ imageSrc, alt }) => {
  return (
    <S.ImageContainer>
      <Image
        src={imageSrc}
        alt={alt}
        layout="responsive"
        width={1200}
        height={500}
        quality={100}
      />
    </S.ImageContainer>
  );
};

export default CarouselImage;

CarouselImage.propTypes = {
  alt: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
};
