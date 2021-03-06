import styled from 'styled-components';

export const Button = styled.button`
  align-self: center;
  font-size: 1.6rem;
  font-weight: 500;
  font-family: inherit;
  cursor: pointer;
  justify-self: flex-start;
  line-height: 1.75;
  outline: none;
  transition: background-color 0.1s ease-in-out;

  & + & {
    margin-left: 1.6rem;
  }
`;

export const ButtonPrimary = styled(Button)`
  align-self: ${({ alignSelf }) => alignSelf || null};
  background-color: ${({ theme }) => theme.colors.primary.denim};
  border: 1px solid transparent;
  border-radius: 1.2rem;
  color: ${({ theme }) => theme.colors.primary.white};
  padding: 1.2rem 2.4rem;

  &:hover:not(:disabled),
  &:focus:not(:disabled) {
    background-color: transparent;
    border-color: ${({ theme }) => theme.colors.primary.denim};
    color: ${({ theme }) => theme.colors.primary.denim};
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.3;
  }
`;

export const ButtonSecondary = styled(Button)`
  align-items: center;
  background-color: transparent;
  border: none;
  border-radius: 0.6rem;
  display: flex;
  color: ${({ theme }) => theme.colors.primary.denim};
  padding: 0.4rem 0.8rem;

  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.colors.secondary.frenchPass};
  }

  & svg {
    height: 2rem;
    margin-left: 0.6rem;
    width: 2rem;
  }
`;
