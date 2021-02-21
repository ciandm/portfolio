import React from 'react';
import PropTypes from 'prop-types';
import * as S from './styled';

const Section = ({
  backgroundColor,
  paddingL,
  paddingM,
  paddingS,
  children,
}) => {
  // rem units
  // paddingL = padding on desktop
  // paddingM = padding on table
  // paddingS = padding on mobile
  return (
    <S.Section
      backgroundColor={backgroundColor}
      paddingL={paddingL}
      paddingM={paddingM}
      paddingS={paddingS}
    >
      {children}
    </S.Section>
  );
};

export default Section;

Section.propTypes = {
  backgroundColor: PropTypes.oneOf(['blackPearl', 'white', 'linkWater']),
  children: PropTypes.node.isRequired,
  paddingL: PropTypes.number.isRequired,
  paddingM: PropTypes.number.isRequired,
  paddingS: PropTypes.number.isRequired,
};
