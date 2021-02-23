import styled from 'styled-components';

export const Project = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;

  @media ${({ theme }) => theme.mediaQueries.tablet} {
    padding: 0 2.4rem;
  }

  @media ${({ theme }) => theme.mediaQueries.desktop} {
    background-color: ${({ theme }) => theme.colors.primary.blackPearl};
    border-radius: 1.2rem;
    flex-direction: row;
    margin: 0 auto;
    max-width: 83.3333%;
    padding: 4.8rem;
    width: 83.3333%;
  }
`;

export const ImageWrapper = styled.div`
  align-items: center;
  background-color: transparent;
  display: flex;
  justify-content: center;
  position: relative;
  width: 100%;

  &::before {
    background-color: ${({ theme }) => theme.colors.primary.blackPearl};
    content: '';
    display: block;
    height: 50%;
    left: 0;
    position: absolute;
    right: 0;
    top: 50%;
    width: 100%;

    @media ${({ theme }) => theme.mediaQueries.tablet} {
      border-radius: 1.2rem 1.2rem 0 0;
      left: 0;
      width: 100%;
    }

    @media ${({ theme }) => theme.mediaQueries.desktop} {
      display: none;
    }
  }

  @media ${({ theme }) => theme.mediaQueries.desktop} {
    order: 1;
  }
`;

export const ImageContainer = styled.div`
  background-color: transparent;
  border-radius: 1.2rem;
  box-shadow: 0px 10px 24px rgba(6, 28, 54, 0.06),
    0px 12px 48px rgba(6, 28, 54, 0.08), 0px 16px 96px rgba(6, 28, 54, 0.12);
  height: 24rem;
  margin: 0 1.6rem;
  max-width: 45rem;
  position: relative;
  width: 100%;

  & img {
    border-radius: 1.2rem;
  }

  @media ${({ theme }) => theme.mediaQueries.tablet} {
    height: 30rem;
    position: relative;
    margin: 0;
    width: 45rem;
  }
`;

export const Content = styled.div`
  background-color: ${({ theme }) => theme.colors.primary.blackPearl};
  display: grid;
  gap: 1.2rem;
  grid-template-rows: repeat(4, min-content);
  padding: 3.2rem 1.6rem 4.8rem;
  width: 100%;

  @media ${({ theme }) => theme.mediaQueries.tablet} {
    border-radius: 0 0 1.2rem 1.2rem;
    padding: 4.8rem;
  }

  @media ${({ theme }) => theme.mediaQueries.desktop} {
    border-radius: 0;
    padding: 0;
    margin-right: 2.4rem;
    min-width: 52rem;
    width: 100%;
  }
`;
