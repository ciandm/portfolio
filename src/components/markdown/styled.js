import styled from 'styled-components';

export const Section = styled.section`
  display: flex;
  justify-content: center;
  padding: 0 1.6rem 7.2rem;

  @media ${({ theme }) => theme.mediaQueries.tablet} {
    padding: 0 2.4rem 8.4rem;
  }

  @media ${({ theme }) => theme.mediaQueries.desktop} {
    padding: 0;
  }
`;

export const Wrapper = styled.div`
  max-width: ${({ theme }) => theme.constants.maxWidth};
  width: 100%;
`;

export const Markdown = styled.div`
  width: 100%;

  & h2 {
    padding-bottom: 2.4rem;
  }

  & h3 {
  }

  & h4 {
    padding-bottom: 0.4rem;
  }

  & h5 {
  }

  & hr {
    border-top: 1px solid ${({ theme }) => theme.colors.secondary.periwinkle};
  }

  @media ${({ theme }) => theme.mediaQueries.tablet} {
    margin: 0 auto;
    width: 75%;
  }

  @media ${({ theme }) => theme.mediaQueries.desktop} {
    flex-basis: 66.66667%;
    max-width: 66.66667%;
  }
`;
