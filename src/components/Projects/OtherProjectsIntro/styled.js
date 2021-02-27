import styled from 'styled-components';

export const Wrapper = styled.div`
  max-width: ${({ theme }) => theme.constants.maxWidth};
  padding: 0 1.6rem;
  width: 100%;

  @media ${({ theme }) => theme.mediaQueries.tablet} {
    padding: 0 2.4rem;
  }

  @media ${({ theme }) => theme.mediaQueries.desktop} {
    padding: 0;
  }
`;

export const Container = styled.div`
  text-align: left;
  width: 100%;

  @media ${({ theme }) => theme.mediaQueries.tablet} {
    margin: 0 auto;
    max-width: 75%;
  }

  @media ${({ theme }) => theme.mediaQueries.desktop} {
    max-width: 83.3333%;
  }
`;
