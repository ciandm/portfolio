import styled from 'styled-components';

export const Arrow = styled.button`
  align-items: center;
  border: none;
  background-color: ${({ theme }) => theme.colors.primary.white};
  box-shadow: 0px 4px 12px rgba(9, 119, 200, 0.16),
    0px 4px 24px rgba(9, 119, 200, 0.12), 0px 4px 36px rgba(9, 119, 200, 0.08);
  border-radius: 4.8rem;
  cursor: pointer;
  display: flex;
  height: 4.8rem;
  justify-content: center;
  outline: none;
  position: absolute;
  // calc to account for height added by paging below
  top: calc(50% - 2rem);
  transform: translateY(-50%);
  width: 4.8rem;
  z-index: 100;

  & svg {
    fill: ${({ theme }) => theme.colors.primary.denim};
    height: 2.4rem;
    width: 2.4rem;
  }

  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.colors.primary.denim};

    & svg {
      fill: ${({ theme }) => theme.colors.primary.white};
    }
  }
`;

export const PrevArrow = styled(Arrow)`
  left: 4.8rem;
`;

export const NextArrow = styled(Arrow)`
  right: 4.8rem;
`;
