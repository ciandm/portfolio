import React from 'react';
import * as S from './styled';

const Paging = ({ children }) => {
  return <S.Paging className="dots">{children}</S.Paging>;
};

const PagingItem = ({ goToSlideHandler, active }) => {
  return <S.PagingItem active={active} onClick={goToSlideHandler} />;
};

export default Paging;

export { PagingItem };
