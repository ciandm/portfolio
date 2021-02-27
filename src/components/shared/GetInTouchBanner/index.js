import React from 'react';
import PropTypes from 'prop-types';
import * as S from './styled';
// Components
import Heading from '../Typography/Heading';
import Paragraph from '../Typography/Paragraph';
import Button from '../Button';

function GetInTouchBanner({ backgroundColor, portfolioPageCurrent }) {
  return (
    <S.Section backgroundColor={backgroundColor}>
      <S.Wrapper>
        <S.Content>
          <Heading type="h3" color="blackPearl">
            Want to have a chat?
          </Heading>
          <Paragraph color="blueBayoux">
            Leave me a message and I’ll promise to get back to you as soon as
            possible - even if it’s just to say hello!
          </Paragraph>
          <S.Buttons>
            <Button variation="primary" as="a" href="/contact">
              Get in touch
            </Button>
            {!portfolioPageCurrent && (
              <Button
                variation="secondary"
                as="a"
                href="/portfolio"
                // Swap light blue background on hover for white if background is set to blue
                ghost
              >
                View my portfolio
              </Button>
            )}
          </S.Buttons>
        </S.Content>
      </S.Wrapper>
    </S.Section>
  );
}

export default GetInTouchBanner;

GetInTouchBanner.propTypes = {
  backgroundColor: PropTypes.oneOf(['white', 'linkWater']).isRequired,
  portfolioPageCurrent: PropTypes.bool,
};
