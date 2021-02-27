import React from 'react';
import Slider from 'react-slick';
import Container from './Container';

function Carousel() {
  const settings = {
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
      <h2> Single Item</h2>
      <Slider {...settings}>
        <div>
          <img src="/images/image-placeholder.jpg" alt="Placeholder" />
        </div>
        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
        <div>
          <h3>5</h3>
        </div>
        <div>
          <h3>6</h3>
        </div>
      </Slider>
    </Container>
  );
}

export default Carousel;
