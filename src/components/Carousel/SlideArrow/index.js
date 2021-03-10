import React from 'react';
import PropTypes from 'prop-types';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import * as S from './styled';
import useWindowSize from '../../../hooks/useWindowSize';

function SlideArrow({ type, prevSlideHandler, nextSlideHandler }) {
  if (useWindowSize() < 1110) return null;
  if (type === 'left') {
    return <PrevArrow prevSlideHandler={prevSlideHandler} />;
  }
  return <NextArrow nextSlideHandler={nextSlideHandler} />;
}

const PrevArrow = ({ prevSlideHandler }) => {
  return (
    <S.PrevArrow onClick={prevSlideHandler}>
      <MdKeyboardArrowLeft />
    </S.PrevArrow>
  );
};

const NextArrow = ({ nextSlideHandler }) => {
  return (
    <S.NextArrow onClick={nextSlideHandler}>
      <MdKeyboardArrowRight />
    </S.NextArrow>
  );
};

export default SlideArrow;

SlideArrow.propTypes = {
  nextSlideHandler: PropTypes.func,
  prevSlideHandler: PropTypes.func,
  type: PropTypes.oneOf(['left', 'right']).isRequired,
};
