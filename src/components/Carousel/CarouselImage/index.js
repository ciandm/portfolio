import React from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';
import * as S from './styled';
import 'keen-slider/keen-slider.min.css';

const CarouselImage = ({ imageSrc, alt }) => {
  return (
    <S.ImageContainer className="keen-slider__slide">
      <Image
        src={imageSrc}
        alt={alt}
        layout="responsive"
        width={1200}
        height={500}
        quality={100}
        priority
      />
    </S.ImageContainer>
  );
};

export default CarouselImage;

CarouselImage.propTypes = {
  alt: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
};
