import styled from 'styled-components';
import { Body } from '../../../../theme/typography';

export const Paragraph = styled.p`
  ${Body};
  color: ${({ color, theme }) =>
    color === 'blueBayoux'
      ? theme.colors.secondary.blueBayoux
      : theme.colors.primary.white};
  padding-bottom: ${({ paddingBottom }) =>
    paddingBottom ? `${paddingBottom}rem` : null};
  padding-top: ${({ paddingTop }) => (paddingTop ? `${paddingTop}rem` : null)};

  & strong {
    font-weight: 700;
  }

  & code {
    background-color: ${({ theme }) => theme.colors.secondary.periwinkle};
    border-radius: 4px;
    padding: 0.8rem 0.4rem;
  }

  & a {
    color: ${({ theme }) => theme.colors.primary.denim};

    &:hover {
      color: ${({ theme }) => theme.colors.primary.blackPearl};
    }
  }
`;
