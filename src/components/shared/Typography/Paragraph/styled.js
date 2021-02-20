import styled from 'styled-components';
import { Body } from '../../../../theme/typography';

export const Paragraph = styled.p`
  ${Body};
  color: ${({ color, theme }) => theme.colors.primary[color]};

  & strong {
    font-weight: 700;
  }
`;
