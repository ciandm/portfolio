import styled from 'styled-components';

export const Section = styled.section`
  align-items: center;
  background-color: ${({ backgroundColor, theme }) =>
    backgroundColor === 'white'
      ? theme.colors.primary.white
      : backgroundColor === 'blackPearl'
      ? theme.colors.primary.blackPearl
      : theme.colors.secondary.linkWater};
  display: flex;
  flex-direction: column;
  overflow: hidden;
  padding: ${({ paddingS }) => `${paddingS}rem 0`};

  @media ${({ theme }) => theme.mediaQueries.tablet} {
    padding: ${({ paddingM }) => `${paddingM}rem 0`};
  }

  @media ${({ theme }) => theme.mediaQueries.desktop} {
    padding: ${({ paddingL }) => `${paddingL}rem 0`};
  }
`;
