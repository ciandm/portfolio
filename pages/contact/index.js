import React, { useState } from 'react';
import Head from 'next/head';
import Form from '../../src/components/Form';

function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const handleFormSubmission = () => {
    setSubmitted(true);
  };
  return (
    <>
      <Head>
        <title>Contact | Cian Dolphin-Murray</title>
      </Head>
      <Form submitted={submitted} handleFormSubmission={handleFormSubmission} />
    </>
  );
}

export default Contact;
