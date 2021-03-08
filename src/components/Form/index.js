import React, { useState } from 'react';
import * as S from './styled';
// Components
import Intro from './Intro';
import Input from './Input';
import Button from '../shared/Button';
import FormSubmission from './FormSubmission';

function Form({ submitted, handleFormSubmission }) {
  const [inputs, setInputs] = useState({
    email: '',
    message: '',
    name: '',
  });

  const [errors, setErrors] = useState({
    email: null,
    message: null,
    name: null,
  });

  const updateErrors = (name, value) => {
    setErrors(prevErrors => ({ ...prevErrors, [name]: value }));
  };

  const handleInputChange = e => {
    setInputs(prevInputs => ({
      ...prevInputs,
      [e.target.name]: e.target.value,
    }));
    updateErrors(e.target.name, false);
  };

  const handleSubmit = e => {
    e.preventDefault();
    let formValid = true;
    // check inputs for errors
    if (inputs.email === '') {
      updateErrors('email', true);
      formValid = false;
    }
    if (inputs.message === '') {
      updateErrors('message', true);
      formValid = false;
    }
    if (inputs.name === '') {
      updateErrors('name', true);
      formValid = false;
    }

    if (formValid) {
      handleFormSubmission();
    }
  };

  return (
    <S.Section>
      <S.Wrapper>
        <S.Container>
          <S.Intro>
            <Intro />
          </S.Intro>
          {submitted ? (
            <FormSubmission />
          ) : (
            <S.Form onSubmit={e => handleSubmit(e)}>
              <Input
                error={errors.name}
                handleInputChange={handleInputChange}
                label="Your name"
                name="name"
                placeholder="John Doe"
                type="text"
                value={inputs.name}
              />
              <Input
                error={errors.email}
                handleInputChange={handleInputChange}
                label="Your email"
                name="email"
                placeholder="johndoe@sesamestreet.com"
                type="email"
                value={inputs.email}
              />
              <Input
                as="textarea"
                error={errors.message}
                handleInputChange={handleInputChange}
                label="Your message"
                name="message"
                placeholder="Your message goes here"
                value={inputs.message}
              />
              <Button alignSelf="stretch" as="button" type="submit">
                Send message
              </Button>
            </S.Form>
          )}
        </S.Container>
      </S.Wrapper>
    </S.Section>
  );
}

export default Form;
