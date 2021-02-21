import styled from 'styled-components';

export const Wrapper = styled.div`
  max-width: ${({ theme }) => theme.constants.maxWidth};
  padding: 0 1.6rem;
  position: relative;
  width: 100%;

  @media ${({ theme }) => theme.mediaQueries.tablet} {
    padding: 0 2.4rem;
  }

  @media ${({ theme }) => theme.mediaQueries.desktop} {
    display: flex;
    justify-content: center;
    padding: 0;
  }
`;

export const Content = styled.div`
  display: grid;
  gap: 1.2rem;
  grid-template-columns: 1fr;

  &::before {
    background-image: url('/images/polka-texture.svg');
    background-repeat: repeat;
    content: '';
    display: block;
    height: 20rem;
    opacity: 0.1;
    position: absolute;
    right: 0;
    transform-origin: center;
    transform: translateX(50%) rotate(15deg);
    width: 20rem;

    @media ${({ theme }) => theme.mediaQueries.tablet} {
      height: 25rem;
      right: 4.8rem;
      width: 25rem;
    }

    @media ${({ theme }) => theme.mediaQueries.desktop} {
      height: 32rem;
      right: 30rem;
      width: 32rem;
    }
  }

  @media ${({ theme }) => theme.mediaQueries.tablet} {
    width: 75%;
  }

  @media ${({ theme }) => theme.mediaQueries.desktop} {
    flex-basis: 41.66667%;
    width: 41.66667%;
  }
`;

export const Buttons = styled.div`
  align-items: center;
  display: flex;
  padding-top: 2.4rem;
`;

export const ImageContainer = styled.div`
  border-radius: 1.2rem;
  height: 32rem;
  position: relative;
  margin-left: 4.8rem;
  overflow: hidden;
  width: 35rem;
`;
