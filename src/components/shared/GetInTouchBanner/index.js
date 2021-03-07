import React from 'react';
import PropTypes from 'prop-types';
import * as S from './styled';
// Components
import Heading from '../Typography/Heading';
import Paragraph from '../Typography/Paragraph';
import Button from '../Button';

function GetInTouchBanner({ backgroundColor }) {
  return (
    <S.Section backgroundColor={backgroundColor}>
      <S.Wrapper>
        <S.Content>
          <Heading type="h3" color="white">
            Want to have a chat?
          </Heading>
          <Paragraph color="white">
            Leave me a message and I’ll promise to get back to you as soon as
            possible - even if it’s just to say hello!
          </Paragraph>
          <S.Buttons>
            <Button variation="primary" as="a" href="/contact">
              Get in touch
            </Button>
          </S.Buttons>
        </S.Content>
      </S.Wrapper>
    </S.Section>
  );
}

export default GetInTouchBanner;

GetInTouchBanner.propTypes = {
  backgroundColor: PropTypes.oneOf(['white', 'linkWater']).isRequired,
};
