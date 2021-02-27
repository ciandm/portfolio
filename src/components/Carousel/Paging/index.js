import React from 'react';
import * as S from './styled';

const Paging = ({ dots }) => {
  return <S.Paging>{dots}</S.Paging>;
};

const PagingItem = () => {
  return <S.PagingItem />;
};

export default Paging;

export { PagingItem };
