import styled from 'styled-components';
import { SmallCaps } from '../../../theme/typography';

export const Breadcrumbs = styled.div`
  align-items: center;
  display: flex;
`;

export const Crumb = styled.span`
  ${SmallCaps};
  color: ${({ theme }) => theme.colors.primary.denim};
`;

export const Arrow = styled.div`
  height: 1.6rem;
  width: 1.6rem;
  margin: 0 0.8rem;

  & svg {
    fill: ${({ theme }) => theme.colors.primary.denim};
    height: 100%;
    width: 100%;
  }
`;
