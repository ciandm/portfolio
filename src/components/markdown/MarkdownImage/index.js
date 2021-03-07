import React from 'react';

const MarkdownImage = ({ src, alt }) => {
  return (
    <figure>
      <img src={src} alt={alt} />
      {alt}
    </figure>
  );
};

export default MarkdownImage;
