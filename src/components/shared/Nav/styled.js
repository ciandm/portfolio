import styled from 'styled-components';
import { H3, SmallCaps } from '../../../theme/typography';

export const Nav = styled.nav`
  background-color: ${({ theme }) => theme.colors.primary.white};
`;

export const NavWrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  max-width: ${({ theme }) => theme.constants.maxWidth};
  padding: 1.2rem 1.6rem;
  position: relative;

  @media ${({ theme }) => theme.mediaQueries.tablet} {
    padding: 1.2rem 2.4rem;
  }
`;

export const LogoContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.primary.denim};
  height: 3.2rem;
  width: 7.2rem;
`;

export const Menu = styled.button`
  align-items: center;
  background-color: transparent;
  border: none;
  display: flex;
  justify-content: center;
  height: 3.6rem;
  outline: none;
  width: 3.6rem;

  & svg {
    height: 2.4rem;
    width: 2.4rem;
  }
`;

export const NavItems = styled.ul`
  background-color: ${({ theme }) => theme.colors.primary.white};
  display: ${({ open }) => (open ? 'flex' : 'none')};
  flex-direction: column;
  left: 0;
  padding: 1.6rem 2rem;
  position: absolute;
  top: 100%;
  width: 100%;

  &::before {
    background-color: ${({ theme }) => theme.colors.primary.blackPearl};
    content: '';
    display: block;
    height: 100vh;
    left: 0;
    opacity: 0.6;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: -1;

    @media ${({ theme }) => theme.mediaQueries.tablet} {
      display: none;
    }
  }

  @media ${({ theme }) => theme.mediaQueries.tablet} {
    flex-direction: row;
    position: initial;
    width: auto;
  }
`;

export const NavIcon = styled.div`
  align-items: center;
  background-color: ${({ theme }) => theme.colors.secondary.frenchPass};
  border-radius: 5rem;
  display: flex;
  flex-shrink: 0;
  justify-content: center;
  height: 3.2rem;
  margin-right: 1.2rem;
  width: 3.2rem;

  & svg {
    height: 2rem;
    width: 2rem;
  }
`;

export const NavItem = styled.li`
  ${H3};
  align-items: center;
  display: flex;
  width: 100%;

  & a {
    color: ${({ active, theme }) =>
      active ? theme.colors.primary.denim : theme.colors.primary.blackPearl};
    display: block;
    padding: 1.6rem 0;
    width: 100%;
  }

  & ${NavIcon} svg {
    fill: ${({ active, theme }) =>
      active ? theme.colors.primary.denim : theme.colors.primary.blackPearl};
  }

  @media ${({ theme }) => theme.mediaQueries.tablet} {
    ${SmallCaps};
    width: auto;

    & a {
      color: ${({ active, theme }) =>
        active
          ? theme.colors.primary.denim
          : theme.colors.secondary.blueBayoux};
    }

    & + & {
      margin-left: 3.2rem;
    }
  }
`;
