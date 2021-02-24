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
`;
export const Input = styled.input`
  ${Body};
  appearance: ${({ as }) => (as === 'textarea' ? 'none' : null)};
  border-radius: 1.2rem;
  border: 1px solid ${({ theme }) => theme.colors.secondary.periwinkle};
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
    border-color: ${({ theme }) => theme.colors.primary.denim};
  }

  &:invalid {
    border-color: ${({ theme }) => theme.colors.secondary.redViolet};
  }
`;
