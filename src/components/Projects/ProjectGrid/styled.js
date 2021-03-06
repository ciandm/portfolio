import styled from 'styled-components';

export const Grid = styled.div`
  display: grid;
  gap: 6rem;
  grid-template-columns: 1fr;
  max-width: ${({ theme }) => theme.constants.maxWidth};
  width: 100%;

  @media ${({ theme }) => theme.mediaQueries.tablet} {
    gap: 4.8rem 3.6rem;
    grid-template-columns: repeat(2, 1fr);
    padding: 0 2.4rem;
  }

  @media ${({ theme }) => theme.mediaQueries.desktop} {
    gap: 7.2rem 4.8rem;
    grid-template-columns: repeat(3, 1fr);
    padding: 0;
  }
`;
