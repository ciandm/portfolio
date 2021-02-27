import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import * as S from './styled';

const Container = ({ children }) => {
  return <S.Container>{children}</S.Container>;
};

export default Container;
