import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { MdArrowForward } from 'react-icons/md';
import * as S from './styled';

const ButtonSecondary = ({ href, children, ...restProps }) => {
  return (
    <Link href={href} passHref>
      <S.ButtonSecondary {...restProps}>
        {children} <MdArrowForward />
      </S.ButtonSecondary>
    </Link>
  );
};

export default ButtonSecondary;

ButtonSecondary.propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.string.isRequired,
};
