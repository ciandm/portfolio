import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useKeenSlider } from 'keen-slider/react';
import Container from './Container';
import CarouselImage from './CarouselImage';
import * as S from './styled';
import SlideArrow from './SlideArrow';
import Paging, { PagingItem } from './Paging';

function Carousel({ carouselImages }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [sliderRef, slider] = useKeenSlider({
    initial: 0,
    loop: true,
    slideChanged(s) {
      setCurrentSlide(s.details().relativeSlide);
    },
  });

  return (
    <Container>
      <S.Carousel ref={sliderRef} className="keen-slider">
        {carouselImages.map(image => (
          <CarouselImage key={image.src} imageSrc={image.src} alt={image.alt} />
        ))}
        {slider && (
          <>
            <SlideArrow
              type="left"
              prevSlideHandler={e => e.stopPropagation() || slider.prev()}
            />
            ,
            <SlideArrow
              type="right"
              nextSlideHandler={e => e.stopPropagation() || slider.next()}
            />
            ;
          </>
        )}
      </S.Carousel>
      {slider && (
        <Paging>
          {[...Array(slider.details().size).keys()].map(i => {
            return (
              <PagingItem
                key={i}
                goToSlideHandler={() => {
                  slider.moveToSlideRelative(i);
                }}
                active={currentSlide === i}
              />
            );
          })}
        </Paging>
      )}
    </Container>
  );
}

export default Carousel;

Carousel.propTypes = {
  carouselImages: PropTypes.arrayOf(PropTypes.object),
};
