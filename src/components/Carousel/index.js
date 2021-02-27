import React, { useRef } from 'react';
import Slider from 'react-slick';
import Container from './Container';
import Image from './Image';
import Paging, { PagingItem } from './Paging';
import SlideArrow from './SlideArrow/index';

function Carousel() {
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
        <div>
          <Image src="/images/image-placeholder.jpg" alt="Placeholder" />
        </div>
        <div>
          <Image src="/images/image-placeholder.jpg" alt="Placeholder" />
        </div>
        <div>
          <Image src="/images/image-placeholder.jpg" alt="Placeholder" />
        </div>
      </Slider>
    </Container>
  );
}

export default Carousel;
