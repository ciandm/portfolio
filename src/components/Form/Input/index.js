import React from 'react';
import PropTypes from 'prop-types';
import * as S from './styled';
import ErrorIcon from '../Icons/ErrorIcon';

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
        <S.Error>
          <ErrorIcon />
        </S.Error>
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
