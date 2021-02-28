import React from 'react';
import Image from 'next/image';
import * as S from './styled';

const MarkdownImage = ({ src, alt }) => {
  return (
    <S.ImageContainer>
      <Image src={src} alt={alt} layout="fill" />
    </S.ImageContainer>
  );
};

export default MarkdownImage;
