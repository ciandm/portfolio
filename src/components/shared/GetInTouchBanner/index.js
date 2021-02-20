import React from 'react';
import PropTypes from 'prop-types';
import * as S from './styled';
import Paragraph from '../Typography/Paragraph';
import Button from '../Button';

function GetInTouchBanner({ background }) {
  return (
    <S.Section background={background}>
      <S.Wrapper>
        <S.Content>
          <Paragraph color="blueBayoux">
            Leave me a message and I’ll promise to get back to you as soon as
            possible - even if it’s just to say hello!
          </Paragraph>
          <S.Buttons>
            <Button variation="primary" as="a" href="/contact">
              Get in touch
            </Button>
            <Button
              variation="secondary"
              as="a"
              href="/portfolio"
              // Swap light blue background on hover for white if background is set to blue
              ghost
            >
              View my work
            </Button>
          </S.Buttons>
        </S.Content>
      </S.Wrapper>
    </S.Section>
  );
}

export default GetInTouchBanner;

GetInTouchBanner.propTypes = {
  background: PropTypes.oneOf(['white', 'blue']).isRequired,
};
