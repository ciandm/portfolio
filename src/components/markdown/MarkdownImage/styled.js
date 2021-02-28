import styled from 'styled-components';

export const ImageContainer = styled.span`
  display: block;
  height: 25rem;
  position: relative;
  margin: 3.6rem 0 0;

  @media ${({ theme }) => theme.mediaQueries.tablet} {
    height: 35rem;
  }

  @media ${({ theme }) => theme.mediaQueries.desktop} {
    height: 45rem;
  }
`;
