import styled from 'styled-components';

export const PagingItem = styled.button`
  align-items: center;
  background-color: transparent;
  cursor: pointer;
  border: none;
  display: flex;
  height: 0.6rem;
  outline: none;
  padding: 1.2rem 0;
  width: 6rem;

  &::before {
    background-color: ${({ theme, active }) =>
      active ? theme.colors.primary.denim : theme.colors.secondary.frenchPass};
    content: '';
    display: block;
    height: 0.6rem;
    width: 100%;
  }

  &:focus::before,
  &:hover::before {
    background-color: ${({ theme }) => theme.colors.primary.denim};
  }
`;

export const Paging = styled.div`
  display: flex;
  justify-content: center;
  list-style: none;
  padding-top: 3.6rem;

  & button + button {
    padding-left: 0.8rem;
  }
`;
