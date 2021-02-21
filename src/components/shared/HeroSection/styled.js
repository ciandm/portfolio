import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 0 1.6rem;
  position: relative;

  @media ${({ theme }) => theme.mediaQueries.tablet} {
    padding: 0 2.4rem;
  }
`;

export const Content = styled.div`
  display: grid;
  gap: 1.2rem;
  grid-auto-rows: min-content;

  &::before {
    background-image: url('/images/polka-texture.svg');
    background-repeat: repeat;
    content: '';
    display: ${({ backgroundPattern }) =>
      backgroundPattern ? 'block' : 'none'};
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
    margin: 0 auto;
    width: 75%;
  }

  @media ${({ theme }) => theme.mediaQueries.tablet} {
    flex-basis: 66.66667%;
    width: 66.66667%;
  }
`;
