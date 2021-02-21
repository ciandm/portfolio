import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: ${({ theme }) => theme.constants.maxWidth};
  padding: 0 1.6rem;

  @media ${({ theme }) => theme.mediaQueries.tablet} {
    padding: 0 2.4rem;
  }

  @media ${({ theme }) => theme.mediaQueries.desktop} {
    margin: 0 2.4rem;
    padding: 0;
  }
`;

export const Intro = styled.div`
  display: grid;
  gap: 1.2rem;
  grid-template-columns: 1fr;

  @media ${({ theme }) => theme.mediaQueries.desktop} {
    max-width: 66.666667%;
  }
`;

export const SkillsGrid = styled.div`
  display: grid;
  gap: 4.8rem;
  grid-template-columns: 1fr;

  @media ${({ theme }) => theme.mediaQueries.tablet} {
    gap: 4.8rem 3.2rem;
    grid-template-columns: repeat(2, 1fr);
  }

  @media ${({ theme }) => theme.mediaQueries.desktop} {
    gap: 4.8rem;
    grid-template-columns: repeat(4, 1fr);
  }
`;

export const Buttons = styled.div`
  align-items: center;
  display: flex;
  padding-top: 6rem;
`;
