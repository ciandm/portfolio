import styled from 'styled-components';

export const Wrapper = styled.div`
  max-width: ${({ theme }) => theme.constants.maxWidth};
  padding: 0 1.6rem;
  margin-bottom: ${({ extraHeadingMargin }) =>
    extraHeadingMargin ? '4.8rem' : '2.4rem'};
  width: 100%;

  @media ${({ theme }) => theme.mediaQueries.tablet} {
    padding: 0 2.4rem;
  }

  @media ${({ theme }) => theme.mediaQueries.desktop} {
    padding: 0;
  }
`;

export const Container = styled.div`
  display: grid;
  gap: 1.2rem;
  text-align: ${({ alignHeading }) => alignHeading};
  width: 100%;

  @media ${({ theme }) => theme.mediaQueries.tablet} {
    margin: 0 auto;
    max-width: 75%;
  }

  @media ${({ theme }) => theme.mediaQueries.desktop} {
    max-width: 100%;
  }
`;
