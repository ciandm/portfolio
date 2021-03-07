import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';
import Container from './Container';
import CarouselImage from './CarouselImage';
import Paging, { PagingItem } from './Paging';
import SlideArrow from './SlideArrow/index';

function Carousel({ carouselImages }) {
  const customSlider = useRef();

  const nextSlideHandler = () => {
    customSlider.current.slickNext();
  };

  const prevSlideHandler = () => {
    customSlider.current.slickPrev();
  };

  // needs a ref to use method
  const goToSlideHandler = i => {
    customSlider.current.slickGoTo(i);
  };

  const settings = {
    appendDots: dots => <Paging dots={dots} />,
    autoplay: true,
    autoplaySpeed: 5000,
    cssEase: 'ease-in-out',
    customPaging: i => (
      <PagingItem index={i} goToSlideHandler={goToSlideHandler} />
    ),
    dots: true,
    infinite: true,
    lazyLoad: true,
    nextArrow: <SlideArrow type="right" nextSlideHandler={nextSlideHandler} />,
    prevArrow: <SlideArrow type="left" prevSlideHandler={prevSlideHandler} />,
    slidesToScroll: 1,
    slidesToShow: 1,
    speed: 500,
  };

  return (
    <Container>
      <Slider {...settings} ref={customSlider}>
        {carouselImages.map(image => (
          <CarouselImage key={image.src} imageSrc={image.src} alt={image.alt} />
        ))}
      </Slider>
    </Container>
  );
}

export default Carousel;

Carousel.propTypes = {
  carouselImages: PropTypes.arrayOf(PropTypes.object),
};
