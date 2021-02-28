import styled from 'styled-components';

export const ImageContainer = styled.span`
  display: block;
  height: ${({ imageHeight }) => `${imageHeight}px`};
  position: relative;
  margin: 2.4rem 0;
`;
