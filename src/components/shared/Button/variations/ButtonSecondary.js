import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { MdArrowForward } from 'react-icons/md';
import * as S from './styled';

const ButtonSecondary = ({ href, as, children, ...restProps }) => {
  if (as === 'a') {
    return (
      <Link href={href} passHref>
        <S.ButtonSecondary {...restProps}>
          {children} <MdArrowForward />
        </S.ButtonSecondary>
      </Link>
    );
  }
  return (
    <S.ButtonSecondary {...restProps}>
      {children} <MdArrowForward />
    </S.ButtonSecondary>
  );
};

export default ButtonSecondary;

ButtonSecondary.propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.string,
};
