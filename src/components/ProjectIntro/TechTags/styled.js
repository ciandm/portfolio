import styled from 'styled-components';
import { SmallCaps } from '../../../theme/typography';

export const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: -0.4rem 0 0 -0.4rem;
`;

export const Tag = styled.span`
  ${SmallCaps};
  background-color: ${({ theme }) => theme.colors.tertiary.fringyFlower};
  border-radius: 0.6rem;
  color: ${({ theme }) => theme.colors.tertiary.parsley};
  display: inline-block;
  margin: 0.4rem;
  padding: 0.4rem 0.8rem;
`;
