import styled from 'styled-components';
import { SmallCaps, Body } from '../../../theme/typography';

export const Footer = styled.footer`
  background-color: ${({ theme }) => theme.colors.primary.blackPearl};
  display: flex;
  justify-content: center;
  margin-top: auto;
  padding: 2.4rem 1.6rem;
  position: relative;

  @media ${({ theme }) => theme.mediaQueries.tablet} {
    padding: 2.4rem;
  }

  &::before {
    background-color: hsl(213, 80%, 6%);
    content: '';
    display: block;
    height: 100%;
    position: absolute;
    top: 0;
    width: 100%;
  }
`;

export const FooterWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  max-width: ${({ theme }) => theme.constants.maxWidth};
  text-align: center;
  width: 100%;
  z-index: 1;
`;

export const FooterNote = styled.p`
  ${Body};
  color: ${({ theme }) => theme.colors.primary.white};
`;

export const FooterLinks = styled.ul`
  display: flex;
  list-style: none;
`;

export const FooterItem = styled.li`
  ${SmallCaps};

  & + & {
    margin-left: 2.4rem;
  }
`;

export const FooterLink = styled.a`
  color: ${({ theme }) => theme.colors.primary.white};
  padding: 1.6rem 0;

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.colors.primary.denim};
  }
`;
