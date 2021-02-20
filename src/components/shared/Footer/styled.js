import styled from 'styled-components';

export const Footer = styled.footer`
  background-color: ${({ theme }) => theme.colors.primary.blackPearl};
  display: flex;
  justify-content: center;
  margin-top: auto;
  padding: 3rem 1.6rem;

  @media ${({ theme }) => theme.mediaQueries.tablet} {
    padding: 3rem 0;
  }
`;

export const FooterWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  max-width: 72rem;
  text-align: center;
`;

export const Icon = styled.a`
  align-items: center;
  background-color: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  height: 4.8rem;
  margin-bottom: 0.6rem;
  outline: none;
  width: 4.8rem;

  & svg {
    fill: ${({ theme }) => theme.colors.primary.white};
    height: 2.4rem;
    width: 2.4rem;
  }

  &:hover svg,
  &:focus svg {
    opacity: 0.5;
  }
`;
