import styled from 'styled-components';

export const Section = styled.section`
  display: flex;
  justify-content: center;
  padding: 0 1.6rem 7.2rem;

  @media ${({ theme }) => theme.mediaQueries.tablet} {
    padding: 0 2.4rem 8.4rem;
  }

  @media ${({ theme }) => theme.mediaQueries.desktop} {
    padding: 0 0 9.6rem;
  }
`;

export const Wrapper = styled.div`
  max-width: ${({ theme }) => theme.constants.maxWidth};
  width: 100%;
`;

export const Markdown = styled.div`
  width: 100%;

  & h3 {
    margin-bottom: 2.4rem;
  }

  & h4 {
    margin-bottom: 1.2rem;
  }

  & h5 {
    margin-bottom: 0.4rem;
  }

  p + p {
    margin-top: 1.2rem;
  }

  p + h2,
  p + h3,
  p + h4,
  p + h5 {
    margin-top: 3.6rem;
  }

  & hr {
    border-top: 1px solid ${({ theme }) => theme.colors.secondary.periwinkle};
    margin: 3.6rem 0;
  }

  & img {
    object-fit: cover;
    height: 25rem;
    margin: 3.6rem 0 0;
    width: 100%;
  }

  @media ${({ theme }) => theme.mediaQueries.tablet} {
    margin: 0 auto;
    width: 75%;

    & img {
      height: 35rem;
    }
  }

  @media ${({ theme }) => theme.mediaQueries.desktop} {
    flex-basis: 66.66667%;
    max-width: 66.66667%;

    & img {
      height: 45rem;
    }
  }
`;
