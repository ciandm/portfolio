import styled from 'styled-components';
import { Body } from '../../../theme/typography';

export const Figure = styled.figure`
  border: 1px solid rgba(0, 0, 0, 0.05);
  margin: 3.6rem 0;
  position: relative;
  width: 100%;

  &:hover figcaption {
    opacity: 0;
    pointer-events: none;
  }
`;

export const Image = styled.img`
  object-fit: cover;
  width: 100%;
`;

export const Caption = styled.figcaption`
  ${Body};
  bottom: 0;
  color: ${({ theme }) => theme.colors.primary.white};
  font-weight: 500;
  padding: 1.2rem;
  position: absolute;
  transition: opacity 0.25s ease-in-out;
  width: 100%;
  z-index: 1;

  &::before {
    background: linear-gradient(
      hsla(213, 80%, 12%, 0),
      hsla(213, 80%, 12%, 0.8)
    );
    bottom: 0;
    content: '';
    display: block;
    height: calc(100% + 6rem);
    left: 0;
    position: absolute;
    width: 100%;
    z-index: -1;
  }
`;
