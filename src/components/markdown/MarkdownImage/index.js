import React from 'react';
import Image from 'next/image';
import * as S from './styled';

const MarkdownImage = ({ src, alt }) => {
  // Get the height of the image from the image src
  const imageHeight = src.split('?height=')[1];

  return (
    <S.ImageContainer imageHeight={imageHeight}>
      <Image src={src} alt={alt} layout="fill" />
    </S.ImageContainer>
  );
};

export default MarkdownImage;
