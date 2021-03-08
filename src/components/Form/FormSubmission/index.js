import React from 'react';
import { MdCheckCircle } from 'react-icons/md';
import * as S from './styled';

const FormSubmission = () => {
  return (
    <S.Container>
      <S.Icon>
        <MdCheckCircle />
      </S.Icon>
      <S.Message>
        Thanks - I’ve received your message and I’ll be in touch as soon as
        possible.
      </S.Message>
    </S.Container>
  );
};

export default FormSubmission;
