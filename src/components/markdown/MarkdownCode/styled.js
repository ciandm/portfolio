import styled from 'styled-components';
import { SmallCaps } from '../../../theme/typography';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 3.6rem;

  & button {
    margin-left: -0.8rem;
  }
`;

export const Container = styled.div`
  border-radius: 1.2rem;
  display: flex;
  font-family: 'Fira Code';
  flex-direction: column;
  max-height: ${({ open }) => (open ? '6000px' : '200px')};
  margin-top: 2.4rem;
  overflow: hidden;
  position: relative;
  transition: max-height 0.5s ease-in-out;
  width: 100%;

  &::before {
    background: linear-gradient(hsla(213, 80%, 12%, 0), hsla(213, 80%, 12%, 1));
    bottom: 0;
    content: '';
    display: block;
    height: 100%;
    left: 0;
    opacity: ${({ open }) => (open ? 0 : 1)};
    position: absolute;
    pointer-events: none;
    transition: opacity 0.5s ease-in-out;
    top: 0;
    width: 100%;
  }

  & * {
    font-family: inherit;
  }
`;

export const MenuBar = styled.div`
  align-items: center;
  background-color: hsl(213, 80%, 6%);
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 1.6rem;
  z-index: 500;
`;

export const Dots = styled.div`
  display: flex;
`;

export const Dot = styled.div`
  background-color: ${({ color, theme }) =>
    color === 'green'
      ? theme.colors.tertiary.eucalyptus
      : color === 'red'
      ? theme.colors.tertiary.redViolet
      : theme.colors.tertiary.tanHide};
  border-radius: 1.2rem;
  height: 1.2rem;
  width: 1.2rem;

  & + & {
    margin-left: 0.8rem;
  }
`;

export const Language = styled.span`
  ${SmallCaps};
  background-color: ${({ theme }) => theme.colors.primary.blackPearl};
  border-radius: 2rem;
  color: ${({ theme }) => theme.colors.primary.white};
  padding: 0.4rem 1.2rem;
`;
