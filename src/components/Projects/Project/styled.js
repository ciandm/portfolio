import styled from 'styled-components';
import { SmallCaps } from '../../../theme/typography';

export const Project = styled.a`
  align-items: center;
  display: flex;
  flex-direction: column;
  padding: 0 1.6rem;

  @media ${({ theme }) => theme.mediaQueries.tablet} {
    padding: 0;
  }

  &:hover img,
  &:focus img,
  &:focus h4,
  &:hover h4 {
    opacity: 0.8;
  }

  & h4 {
    transition: opacity 0.1s ease-in-out;
  }

  &:focus button {
    background-color: ${({ theme }) => theme.colors.secondary.frenchPass};
  }
`;

export const Header = styled.div`
  display: grid;
  gap: 0.6rem;
  flex-direction: column;
  margin-bottom: auto;
  padding-bottom: 2.4rem;
  width: 100%;
`;

export const ImageContainer = styled.div`
  background-color: transparent;
  border: 1px solid rgba(0, 0, 0, 0.05);
  height: 30rem;
  margin: 0 1.6rem;
  position: relative;
  width: 100%;

  & img {
    transition: opacity 0.1s ease-in-out;
  }
`;

export const Footer = styled.div`
  align-items: center;
  border-bottom: ${({ theme }) =>
    `1px solid ${theme.colors.secondary.periwinkle}`};
  display: flex;
  justify-content: space-between;
  padding-bottom: 2.4rem;
  padding-top: 2.4rem;
  width: 100%;
`;

export const Date = styled.span`
  ${SmallCaps};
  color: ${({ theme }) => theme.colors.primary.denim};
`;
