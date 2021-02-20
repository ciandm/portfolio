import styled from 'styled-components';

export const Section = styled.section`
  background-color: ${({ background, theme }) =>
    background === 'white'
      ? theme.colors.primary.white
      : theme.colors.secondary.linkWater};
  display: flex;
  justify-content: center;
  padding: 6rem 1.6rem;
  position: relative;
  z-index: 1;

  &::before,
  &::after {
    content: '';
    height: 100%;
    left: 0;
    top: 0;
    position: absolute;
    width: 100%;
    z-index: -1;
  }

  &::before {
    background-image: url('/images/contact-background.svg');
    background-repeat: repeat;
    opacity: 0.07;
  }

  &::after {
    background: ${({ background }) =>
      background === 'white'
        ? 'linear-gradient(0deg, hsla(0, 0%, 100%, 0) 0%, hsl(0, 0%, 100%) 100%)'
        : 'linear-gradient(0deg, hsla(212, 57%, 91%, 0) 0%, hsl(212, 57%, 91%) 100%)'};
  }

  @media ${({ theme }) => theme.mediaQueries.tablet} {
    padding: 7.2rem 2.4rem;
  }

  @media ${({ theme }) => theme.mediaQueries.tablet} {
    padding: 8.4rem 0;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  max-width: ${({ theme }) => theme.constants.maxWidth};
  width: 100%;
`;

export const Content = styled.div`
  display: grid;
  gap: 1.6rem;
  grid-template-rows: repeat(3, min-content);

  @media ${({ theme }) => theme.mediaQueries.tablet} {
    flex-basis: 75%;
    width: 75%;
  }

  @media ${({ theme }) => theme.mediaQueries.desktop} {
    flex-basis: 50%;
    width: 50%;
  }
`;

export const Buttons = styled.div`
  display: flex;
  padding-top: 3.2rem;
`;
