import styled from 'styled-components';
import { SmallCaps } from '../../../../theme/typography';

export const Strapline = styled.span`
  ${SmallCaps};
  color: ${({ theme }) => theme.colors.primary.denim};
  display: inline-block;
`;
