import React from 'react';
import PropTypes from 'prop-types';
import ButtonPrimary from './variations/ButtonPrimary';
import ButtonSecondary from './variations/ButtonSecondary';

const Button = ({ variation, children, as, href, ...restProps }) => {
  if (variation === 'secondary') {
    return (
      <ButtonSecondary href={href} as={as} {...restProps}>
        {children}
      </ButtonSecondary>
    );
  }

  return (
    <ButtonPrimary as={as} href={href} {...restProps}>
      {children}
    </ButtonPrimary>
  );
};

export default Button;

Button.propTypes = {
  as: PropTypes.oneOf(['button', 'a']),
  href: PropTypes.string,
  variation: PropTypes.oneOf(['primary', 'secondary']),
};
