import React, { useState } from 'react';
import * as S from './styled';
// Components
import Intro from './Intro';
import Input from './Input';
import Button from '../shared/Button';
import FormSubmission from './FormSubmission';

function Form({ submitted, handleFormSubmission }) {
  // to be sent when submitted
  const [inputs, setInputs] = useState({
    accessKey: process.env.NEXT_PUBLIC_STATIC_FORMS_ACCESS_KEY,
    email: '',
    message: '',
    name: '',
    subject: 'Form submission',
  });

  // flag for whenever form is asynchronously submitting
  const [submitting, setSubmitting] = useState(false);

  const [errors, setErrors] = useState({
    email: null,
    message: null,
    name: null,
  });

  const [submitError, setSubmitError] = useState({
    message: '',
    type: '',
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

  const handleSubmit = async event => {
    event.preventDefault();
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
      try {
        setSubmitting(true);
        const res = await fetch('https://api.staticforms.xyz/submit', {
          body: JSON.stringify(inputs),
          headers: { 'Content-Type': 'application/json' },
          method: 'POST',
        });

        const json = await res.json();

        if (json.success) {
          handleFormSubmission();
        } else {
          setSubmitting(false);
          setSubmitError({
            message: json.message,
            type: 'error',
          });
        }
      } catch (e) {
        setSubmitting(false);
        setSubmitError({
          message: e,
          type: e,
        });
      }
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
            <S.Form
              action="https://api.staticforms.xyz/submit"
              method="POST"
              onSubmit={e => handleSubmit(e)}
            >
              <input
                type="hidden"
                name="accessKey"
                value="456bd9b2-f931-44f2-9ba9-2d5d4ae2798f"
              />
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
                {submitting ? 'Sending...' : 'Send message'}
              </Button>
              {submitError && <S.Error>{submitError.message}</S.Error>}
            </S.Form>
          )}
        </S.Container>
      </S.Wrapper>
    </S.Section>
  );
}

export default Form;
