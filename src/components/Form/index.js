import React, { useState } from 'react';
import * as S from './styled';
// Components
import Section from '../shared/Section';
import Intro from './Intro';
import Input from './Input';
import Button from '../shared/Button';

function Form() {
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

  const handleInputChange = e => {
    setInputs(prevInputs => ({
      ...prevInputs,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <Section
      backgroundColor="linkWater"
      paddingS={6}
      paddingM={7.2}
      paddingL={8.4}
    >
      <S.Wrapper>
        <S.Container>
          <S.Intro>
            <Intro />
          </S.Intro>
          <S.Form method="POST" onSubmit={() => console.log('submitted')}>
            <Input
              label="Your name"
              name="name"
              placeholder="Optional placeholder"
              type="text"
              value={inputs.name}
              handleInputChange={handleInputChange}
            />
            <Input
              label="Your email"
              name="email"
              placeholder="Optional placeholder"
              type="email"
              value={inputs.email}
              handleInputChange={handleInputChange}
            />
            <Input
              as="textarea"
              label="Your message"
              name="message"
              placeholder="Your message goes here"
              value={inputs.message}
              handleInputChange={handleInputChange}
            />
            <Button
              disabled={
                inputs.name === '' ||
                inputs.email === '' ||
                inputs.message === ''
              }
              alignSelf="stretch"
              as="button"
            >
              Send message
            </Button>
          </S.Form>
        </S.Container>
      </S.Wrapper>
    </Section>
  );
}

export default Form;
