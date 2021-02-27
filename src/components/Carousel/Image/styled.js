import styled from 'styled-components';

export const Img = styled.img`
  height: 35rem;
  object-fit: cover;
  width: 100%;

  @media ${({ theme }) => theme.mediaQueries.tablet} {
    height: 45rem;
  }

  @media ${({ theme }) => theme.mediaQueries.desktop} {
    height: 50rem;
  }
`;
