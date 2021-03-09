import styled from 'styled-components';

export const Skill = styled.div`
  display: grid;
  gap: 1.2rem;
  grid-template-rows: min-content;

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
  align-items: center;
  background-color: ${({ theme, background }) =>
    theme.colors.tertiary[background]};
  border-radius: 100%;
  display: flex;
  justify-content: center;
  height: 6rem;
  margin-bottom: 0.4rem;
  width: 6rem;

  & svg {
    fill: ${({ theme, iconColour }) => theme.colors.tertiary[iconColour]};
    height: 3rem;
    width: 3rem;
  }
`;
