import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';
import { useKeenSlider } from 'keen-slider/react';
import Container from './Container';
import CarouselImage from './CarouselImage';
import * as S from './styled';
import 'keen-slider/keen-slider.min.css';

function Carousel({ carouselImages }) {
  const [sliderRef, slider] = useKeenSlider();

  return (
    <Container>
      <S.Carousel ref={sliderRef}>
        {carouselImages.map((image, index) => (
          <CarouselImage key={index} {...image} />
        ))}
      </S.Carousel>
    </Container>
  );
}

export default Carousel;

Carousel.propTypes = {
  carouselImages: PropTypes.arrayOf(PropTypes.object),
};
