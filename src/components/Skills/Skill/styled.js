import styled from 'styled-components';

export const Skill = styled.div`
  display: grid;
  gap: 1.2rem;

  & h4 {
    position: relative;

    &::before {
      background-color: ${({ theme }) => theme.colors.primary.denim};
      content: '';
      display: block;
      height: 100%;
      left: -1.6rem;
      position: absolute;
      width: 4px;

      @media ${({ theme }) => theme.mediaQueries.tablet} {
        display: none;
      }
    }
  }
`;

export const Icon = styled.div`
  background-color: ${({ theme, background }) =>
    theme.colors.tertiary[background]};
  border-radius: 100%;
  height: 6rem;
  margin-bottom: 0.4rem;
  width: 6rem;
`;
