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
            Leave me a message on LinkedIn - that's the best place to contact
            me! I'll try get back to you as soon as possible.
          </Paragraph>
          <S.Buttons>
            <Button
              variation="primary"
              as="a"
              target="_blank"
              href="https://www.linkedin.com/in/cian-dolphin-murray-92b05712a/"
            >
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
