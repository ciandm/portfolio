import styled from 'styled-components';

export const Wrapper = styled.div`
  max-width: ${({ theme }) => theme.constants.maxWidth};
  padding: 0 1.6rem;
  position: relative;
  width: 100%;
  z-index: 1;

  &::before {
    background-image: url('/images/polka-texture.svg');
    content: '';
    display: block;
    height: 20rem;
    opacity: 0.1;
    right: 0;
    position: absolute;
    transform-origin: center;
    width: 20rem;
    z-index: -1;
  }

  @media ${({ theme }) => theme.mediaQueries.tablet} {
    padding: 0;
  }

  @media ${({ theme }) => theme.mediaQueries.desktop} {
    padding: 0;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  @media ${({ theme }) => theme.mediaQueries.tablet} {
    margin: 0 auto;
    max-width: 75%;
  }

  @media ${({ theme }) => theme.mediaQueries.desktop} {
    max-width: 50%;
  }
`;

export const Intro = styled.div`
  display: grid;
  gap: 1.6rem;
  grid-auto-rows: min-content;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding-top: 3.6rem;
`;
