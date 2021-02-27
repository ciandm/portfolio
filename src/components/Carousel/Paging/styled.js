import styled from 'styled-components';

export const PagingItem = styled.div`
  background-color: ${({ theme }) => theme.colors.secondary.frenchPass};
  height: 0.6rem;
  width: 6rem;
`;

export const Paging = styled.ul`
  display: flex;
  justify-content: center;
  list-style: none;
  padding-top: 1.6rem;

  & li.slick-active ${PagingItem} {
    background-color: ${({ theme }) => theme.colors.primary.denim};
  }

  & li + li {
    padding-left: 0.8rem;
  }
`;
