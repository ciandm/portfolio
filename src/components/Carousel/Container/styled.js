import styled from 'styled-components';

export const Container = styled.div`
  overflow: hidden;
  padding-bottom: 9.6rem;
  margin: 0 auto;
  max-width: ${({ theme }) => theme.constants.maxWidth};
  width: 100%;
`;
