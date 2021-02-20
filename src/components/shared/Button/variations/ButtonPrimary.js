import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import * as S from './styled';

const ButtonPrimary = ({ as, href, children, ...restProps }) => {
  if (as === 'a') {
    return (
      <Link href={href} passHref>
        <S.ButtonPrimary as={as} {...restProps}>
          {children}
        </S.ButtonPrimary>
      </Link>
    );
  }
  return <S.ButtonPrimary {...restProps}>{children}</S.ButtonPrimary>;
};

export default ButtonPrimary;

ButtonPrimary.propTypes = {
  as: PropTypes.oneOf(['button', 'a']),
  href: PropTypes.string,
  variation: PropTypes.oneOf(['primary', 'secondary']),
};

ButtonPrimary.defaultProps = {
  as: 'link',
};
