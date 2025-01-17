import styled from 'styled-components';

export const Section = styled.section`
  background-color: ${({ theme }) => theme.colors.secondary.linkWater};
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

  & p {
    line-height: 2;
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
    margin: 4.8rem 0;
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
