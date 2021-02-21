import styled from 'styled-components';

export const Grid = styled.div`
  display: grid;
  gap: 6rem;
  grid-template-columns: 1fr;
  max-width: ${({ theme }) => theme.constants.maxWidth};
  width: 100%;

  @media ${({ theme }) => theme.mediaQueries.desktop} {
    gap: 4.8rem;
  }
`;
