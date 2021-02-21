import styled from 'styled-components';
import { Body } from '../../../../theme/typography';

export const Paragraph = styled.p`
  ${Body};
  color: ${({ color, theme }) =>
    color === 'blueBayoux'
      ? theme.colors.secondary.blueBayoux
      : theme.colors.primary.white};
  padding-bottom: ${({ paddingBottom }) => `${paddingBottom}rem`};
  padding-top: ${({ paddingTop }) => `${paddingTop}rem`};

  & strong {
    font-weight: 700;
  }
`;
