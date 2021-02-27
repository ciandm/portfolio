import React, { useRef } from 'react';
import Slider from 'react-slick';
import Container from './Container';
import Image from './Image';
import Paging, { PagingItem } from './Paging';

function Carousel() {
  const customSlider = useRef();

  const nextSlideHandler = () => {
    Slider.slickNext();
  };

  const goToSlideHandler = i => {
    console.log(i);
    customSlider.current.slickGoTo(i);
  };

  const settings = {
    // autoplay: true,
    // autoplaySpeed: 5000,
    appendDots: dots => <Paging dots={dots} />,
    cssEase: 'ease-in-out',
    customPaging: i => (
      <PagingItem index={i} goToSlideHandler={goToSlideHandler} />
    ),
    dots: true,
    infinite: true,
    // responsive: {
    //   breakpoint: 1110,
    //   settings: {
    //     slidesToShow: 2,
    //     slides
    //   }
    // },
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
