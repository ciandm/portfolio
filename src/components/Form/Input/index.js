import React from 'react';
import PropTypes from 'prop-types';
import * as S from './styled';
import ErrorIcon from '../ErrorIcon';

const Input = ({
  error,
  label,
  name,
  placeholder,
  type,
  value,
  as,
  handleInputChange,
}) => {
  return (
    <S.Wrapper>
      <S.Label htmlFor={name}>{label}</S.Label>
      <S.InputContainer>
        <S.Input
          as={as}
          error={error}
          id={name}
          name={name}
          onChange={e => handleInputChange(e)}
          placeholder={placeholder}
          type={type}
          value={value}
        />
        {error && (
          <S.Error>
            <ErrorIcon />
          </S.Error>
        )}
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
