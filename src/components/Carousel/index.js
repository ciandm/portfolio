import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { useKeenSlider } from 'keen-slider/react';
import Container from './Container';
import CarouselImage from './CarouselImage';
import * as S from './styled';
import SlideArrow from './SlideArrow';

function Carousel({ carouselImages }) {
  const [sliderRef, slider] = useKeenSlider({
    loop: true,
  });

  return (
    <Container>
      <S.Carousel ref={sliderRef} className="keen-slider">
        {carouselImages.map(image => (
          <CarouselImage key={image.src} imageSrc={image.src} alt={image.alt} />
        ))}
        {
          slider && (
            <
          )
        }
      </S.Carousel>
    </Container>
  );
}

export default Carousel;

Carousel.propTypes = {
  carouselImages: PropTypes.arrayOf(PropTypes.object),
};
