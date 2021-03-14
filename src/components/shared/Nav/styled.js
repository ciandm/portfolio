import styled from 'styled-components';
import { H4, SmallCaps } from '../../../theme/typography';

export const Nav = styled.nav`
  background-color: ${({ theme }) => theme.colors.primary.white};
  box-shadow: 0 4px 20px hsla(213, 80%, 12%, 0.12);
  padding: 1.2rem 1.6rem;
  position: relative;
  z-index: 500;
`;

export const NavWrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  max-width: ${({ theme }) => theme.constants.maxWidth};
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

  @media ${({ theme }) => theme.mediaQueries.tablet} {
    flex-direction: row;
    padding: 0;
    position: initial;
    width: auto;
  }
`;

export const NavBackdrop = styled.div`
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
  ${H4};
  align-items: center;
  display: flex;
  font-weight: 700;
  width: 100%;

  & a {
    color: ${({ active, theme }) =>
      active ? theme.colors.primary.denim : theme.colors.primary.blackPearl};
    display: block;
    padding: 1.6rem 0;
    width: 100%;
  }

  &:hover a {
    color: ${({ theme }) => theme.colors.primary.blackPearl};
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
