import React from 'react';
import * as S from './styled';

const Paging = ({ dots }) => {
  return <S.Paging>{dots}</S.Paging>;
};

const PagingItem = ({ index, goToSlideHandler }) => {
  return <S.PagingItem onClick={() => goToSlideHandler(index)} />;
};

export default Paging;

export { PagingItem };
