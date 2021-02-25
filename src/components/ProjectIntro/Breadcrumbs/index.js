import React from 'react';
import Link from 'next/link';
import { MdKeyboardArrowRight } from 'react-icons/md';
import * as S from './styled';

const Breadcrumbs = ({ category }) => {
  return (
    <S.Breadcrumbs>
      <S.Crumb>
        <Link href="/portfolio">Portfolio</Link>
      </S.Crumb>
      <S.Arrow>
        <MdKeyboardArrowRight />
      </S.Arrow>
      <S.Crumb>{category}</S.Crumb>
    </S.Breadcrumbs>
  );
};

export default Breadcrumbs;
