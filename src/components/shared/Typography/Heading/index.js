import React from 'react';
import PropTypes from 'prop-types';
import * as S from './styled';

const Heading = ({ type, color, children, ...restProps }) => {
  if (type === 'h5')
    return (
      <S.HeadingFive headingColor={color} {...restProps}>
        {children}
      </S.HeadingFive>
    );
  if (type === 'h4')
    return (
      <S.HeadingFour headingColor={color} {...restProps}>
        {children}
      </S.HeadingFour>
    );
  if (type === 'h3')
    return (
      <S.HeadingThree headingColor={color} {...restProps}>
        {children}
      </S.HeadingThree>
    );
  if (type === 'h2')
    return (
      <S.HeadingTwo headingColor={color} {...restProps}>
        {children}
      </S.HeadingTwo>
    );
  return (
    <S.HeadingOne headingColor={color} {...restProps}>
      {children}
    </S.HeadingOne>
  );
};

export default Heading;

Heading.propTypes = {
  color: PropTypes.oneOf(['white', 'blackPearl']).isRequired,
  paddingBottom: PropTypes.number,
  paddingTop: PropTypes.number,
  type: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5']).isRequired,
};
