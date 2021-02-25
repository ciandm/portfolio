import styled from 'styled-components';
import { SmallCaps, Body } from '../../../theme/typography';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  & + & {
    margin-top: 3.2rem;
  }

  &:last-of-type {
    margin-bottom: 4.8rem;
  }
`;

export const Label = styled.label`
  ${SmallCaps};
  color: ${({ theme }) => theme.colors.primary.blackPearl};
  padding-bottom: 1.6rem;
`;

export const InputContainer = styled.div`
  display: flex;
  position: relative;
`;

export const Input = styled.input`
  ${Body};
  appearance: ${({ as }) => (as === 'textarea' ? 'none' : null)};
  border-radius: 1.2rem;
  border: 1px solid
    ${({ theme, error }) =>
      error
        ? theme.colors.tertiary.redViolet
        : theme.colors.secondary.periwinkle};
  font-family: inherit;
  color: ${({ theme }) => theme.colors.primary.blackPearl};
  outline: none;
  min-height: ${({ as }) => (as === 'textarea' ? '10.8rem' : null)};
  padding: 1.2rem 1.6rem;
  resize: none;
  width: 100%;

  &::placeholder {
    color: ${({ theme }) => theme.colors.secondary.pigeonPost};
  }

  &:hover,
  &:focus {
    border-color: ${({ theme, error }) =>
      error ? theme.colors.tertiary.redViolet : theme.colors.primary.denim};
  }

  &:invalid {
    border-color: ${({ theme }) => theme.colors.secondary.redViolet};
  }
`;

export const Error = styled.div`
  height: 2.4rem;
  width: 2.4rem;
  position: absolute;
  right: 1.6rem;
  top: 1.4rem;
  transform-origin: top;

  & svg {
    height: 100%;
    width: 100%;
  }
`;
