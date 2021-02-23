import styled from 'styled-components';
import { H2, H3, H4, H5, Body } from '../../theme/typography';

export const Markdown = styled.div`

  padding: 0 1.6rem;
  width: 100%;

  & h2,
  & h3,
  & h4,
  & h5 {
    color: ${({ theme }) => theme.colors.primary.blackPearl};
  }

  & h2 {
    ${H2}
    padding-bottom: 2.4rem;
  }

  & h3 {
    ${H3}
  }

  & h4 {
    ${H4}
    padding-bottom: .4rem;
  }

  & h5 {
    ${H5};
  }

  & p {
    ${Body}
    color: ${({ theme }) => theme.colors.secondaryblueBayoux};
  }

  @media ${({ theme }) => theme.mediaQueries.tablet} {
    padding: 0 2.4rem;
  }

  @media ${({ theme }) => theme.mediaQueries.desktop} {
    flex-basis: 66.66667%;
    max-width: 66.66667%;
    padding: 0;
  }
`;
