import React from 'react';
import PropTypes from 'prop-types';
import * as S from './styled';
// Components
import Section from '../Section';

function HeroSection({ children, backgroundPattern }) {
  return (
    <Section backgroundColor="white" paddingS={6} paddingM={7.2} paddingL={8.4}>
      <S.Wrapper>
        <S.Content backgroundPattern={backgroundPattern}>{children}</S.Content>
      </S.Wrapper>
    </Section>
  );
}

export default HeroSection;

HeroSection.propTypes = {
  backgroundPattern: PropTypes.bool,
};
