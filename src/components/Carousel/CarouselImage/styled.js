import styled from 'styled-components';

export const ImageContainer = styled.div`
  height: 35rem;
  object-fit: cover;
  position: relative;
  width: 100%;

  @media ${({ theme }) => theme.mediaQueries.tablet} {
    height: 45rem;
  }

  @media ${({ theme }) => theme.mediaQueries.desktop} {
    height: 50rem;
  }
`;
