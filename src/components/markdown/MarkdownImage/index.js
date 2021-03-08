import React from 'react';
import * as S from './styled';

const MarkdownImage = ({ src, alt }) => {
  return (
    <S.Figure>
      <S.Image src={src} alt={alt} />
      <S.Caption>{alt}</S.Caption>
    </S.Figure>
  );
};

export default MarkdownImage;