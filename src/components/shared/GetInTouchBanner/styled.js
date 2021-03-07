import styled from 'styled-components';

export const Section = styled.section`
  background-color: ${({ theme }) => theme.colors.primary.blackPearl};
  display: flex;
  justify-content: center;
  padding: 4.8rem 1.6rem;
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

  @media ${({ theme }) => theme.mediaQueries.tablet} {
    padding: 4.8rem 2.4rem;
  }

  @media ${({ theme }) => theme.mediaQueries.tablet} {
    padding: 6rem 0;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  max-width: ${({ theme }) => theme.constants.maxWidth};
  width: 100%;

  @media ${({ theme }) => theme.mediaQueries.desktop} {
    justify-content: flex-start;
  }
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
