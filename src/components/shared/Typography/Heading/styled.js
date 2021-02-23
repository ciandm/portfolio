import styled, { css } from 'styled-components';
import { H1, H2, H3, H4, H5 } from '../../../../theme/typography';

const baseHeading = css`
  color: ${({ headingColor, theme }) => theme.colors.primary[headingColor]};
  padding-bottom: ${({ paddingBottom }) =>
    paddingBottom ? `${paddingBottom}rem` : null};
  padding-top: ${({ paddingTop }) => (paddingTop ? `${paddingTop}rem` : null)};
`;

export const HeadingOne = styled.h1`
  ${H1};
  ${baseHeading};
`;

export const HeadingTwo = styled.h2`
  ${H2};
  ${baseHeading};
`;

export const HeadingThree = styled.h3`
  ${H3};
  ${baseHeading};
`;

export const HeadingFour = styled.h4`
  ${H4};
  ${baseHeading};
`;

export const HeadingFive = styled.h5`
  ${H5};
  ${baseHeading};
`;
