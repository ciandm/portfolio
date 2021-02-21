import styled from 'styled-components';

export const ToggleContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.secondary.periwinkle};
  border-radius: 1.2rem;
  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.05);
  display: grid;
  grid-template-columns: 15rem 15rem;
  margin-bottom: 6rem;
  position: relative;
`;

export const Slide = styled.div`
  background-color: ${({ theme }) => theme.colors.primary.denim};
  border-radius: 1.2rem;
  box-shadow: 0px 4px 16px rgba(9, 119, 200, 0.36);
  height: 100%;
  left: 0;
  position: absolute;
  transform: ${({ active }) =>
    active === 'design' ? 'translateX(0)' : 'translateX(100%)'};
  transition: transform 0.25s ease-in-out;
  width: 50%;
`;

export const Toggle = styled.button`
  align-items: center;
  background-color: transparent;
  border-radius: 1.2rem;
  border: none;
  color: ${({ active, theme }) =>
    active ? theme.colors.primary.white : theme.colors.secondary.blueBayoux};
  cursor: pointer;
  display: flex;
  font-size: 1.6rem;
  font-weight: 500;
  line-height: 1.5;
  outline: none;
  padding: 1.2rem 3.6rem;
  z-index: 1;

  & svg {
    margin-left: 0.8rem;
  }

  &:hover,
  &:focus {
    color: ${({ active, theme }) =>
      active ? null : theme.colors.primary.denim};
  }

  &:hover ~ ${Slide}, &:focus ~ ${Slide} {
    opacity: ${({ active }) => (active ? 0.8 : null)};
  }

  &:focus {
  }
`;
