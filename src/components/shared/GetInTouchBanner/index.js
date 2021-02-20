import React from 'react';
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
            <Button variation="secondary" as="a" href="/portfolio" ghost>
              View my work
            </Button>
          </S.Buttons>
        </S.Content>
      </S.Wrapper>
    </S.Section>
  );
}

export default GetInTouchBanner;
