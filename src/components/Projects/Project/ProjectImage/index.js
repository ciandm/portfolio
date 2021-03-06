import React from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';

const ProjectImage = ({ src, alt }) => {
  return <Image src={src} alt={alt} layout="fill" objectFit="cover" />;
};

export default ProjectImage;

ProjectImage.propTypes = {
  alt: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
};
