import React from 'react';
import PropTypes from 'prop-types';
import * as S from './styled';

const Paragraph = ({ children, color, ...restProps }) => {
  return (
    <S.Paragraph color={color} {...restProps}>
      {children}
    </S.Paragraph>
  );
};

export default Paragraph;

Paragraph.propTypes = {
  color: PropTypes.oneOf(['blueBayoux', 'white']).isRequired,
  paddingBottom: PropTypes.number,
  paddingTop: PropTypes.number,
};
