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
    background-color: ${({ theme }) => theme.colors.secondary.frenchPass};
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

export const Paging = styled.ul`
  display: flex;
  justify-content: center;
  list-style: none;
  padding-top: 3.6rem;

  & li.slick-active ${PagingItem}::before {
    background-color: ${({ theme }) => theme.colors.primary.denim};
  }

  & li + li {
    padding-left: 0.8rem;
  }
`;
