import styled from 'styled-components';
import { Body } from '../../../theme/typography';

export const Figure = styled.figure`
  display: flex;
  flex-direction: column;
  margin: 2.4rem 0;
  position: relative;
  width: 100%;
`;

export const ImageWrapper = styled.div`
  display: flex;
  height: auto;
  position: relative;
`;

export const Image = styled.img`
  height: auto;
  object-fit: cover;
  width: 100%;
`;

export const Caption = styled.figcaption`
  ${Body};
  color: ${({ theme }) => theme.colors.secondary.blueBayoux};
  font-size: 1.4rem;
  font-weight: 500;
  padding: 1.2rem 0;
  transition: opacity 0.25s ease-in-out;
  width: 100%;
  z-index: 1;
`;
