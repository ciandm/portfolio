import React from 'react';
import PropTypes from 'prop-types';
import * as S from './styled';

const Image = ({ src, alt }) => {
  return <S.Img src={src} alt={alt} />;
};

export default Image;

Image.propTypes = {
  alt: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
};
