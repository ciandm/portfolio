import styled from 'styled-components';
import { H5 } from '../../../theme/typography';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 3.6rem;
`;

export const Icon = styled.div`
  height: 4.8rem;
  margin-bottom: 1.6rem;
  width: 4.8rem;

  & svg {
    fill: ${({ theme }) => theme.colors.tertiary.eucalyptus};
    height: 100%;
    width: 100%;
  }
`;

export const Message = styled.h5`
  ${H5};
  color: ${({ theme }) => theme.colors.secondary.blueBayoux};
`;
