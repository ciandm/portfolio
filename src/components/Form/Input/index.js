import React from 'react';
import PropTypes from 'prop-types';
import { MdError } from 'react-icons/md';
import * as S from './styled';

const Input = ({ label, name, placeholder, type, value, as }) => {
  return (
    <S.Wrapper>
      <S.Label htmlFor={name}>{label}</S.Label>
      <S.InputContainer>
        <S.Input
          as={as}
          id={name}
          name={name}
          placeholder={placeholder}
          type={type}
          value={value}
        />
        <MdError />
      </S.InputContainer>
    </S.Wrapper>
  );
};

export default Input;

Input.propTypes = {
  as: PropTypes.oneOf(['input', 'textarea']),
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  type: PropTypes.oneOf(['text', 'email']),
  value: PropTypes.string.isRequired,
};
