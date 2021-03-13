import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { MdArrowForward } from 'react-icons/md';
import * as S from './styled';

const ButtonSecondary = ({
  href,
  as,
  children,
  icon,
  handleButtonClick,
  ...restProps
}) => {
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
    <S.ButtonSecondary
      {...restProps}
      onClick={() => handleButtonClick() || null}
    >
      {children} {icon || <MdArrowForward />}
    </S.ButtonSecondary>
  );
};

export default ButtonSecondary;

ButtonSecondary.propTypes = {
  as: PropTypes.oneOf(['button', 'link']).isRequired,
  children: PropTypes.node.isRequired,
  handleButtonClick: PropTypes.func,
  href: PropTypes.string,
  icon: PropTypes.node,
};
