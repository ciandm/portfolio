import React from 'react';
import PropTypes from 'prop-types';

const Image = ({ src, alt }) => {
  return <img src={src} alt={alt} />;
};

export default Image;

Image.propTypes = {
  alt: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
};
