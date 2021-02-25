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
    right: -10rem;
    position: absolute;
    transform-origin: center;
    transform: rotate(15deg);
    width: 20rem;
    z-index: -1;
  }

  @media ${({ theme }) => theme.mediaQueries.tablet} {
    padding: 0;

    &::before {
      height: 30rem;
      top: 2rem;
      width: 30rem;
    }
  }

  @media ${({ theme }) => theme.mediaQueries.desktop} {
    padding: 0;

    &::before {
      right: 14rem;
    }
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
