import styled from 'styled-components';

export const Wrapper = styled.div`
  padding-top: 3.6rem;
`;

export const Container = styled.div`
  border-radius: 1.2rem;
  display: flex;
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
`;
