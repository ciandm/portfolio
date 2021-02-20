import React from 'react';
import Nav from '../Nav';

function PageTemplate({ children }) {
  return (
    <>
      <Nav />
      {children}
    </>
  );
}

export default PageTemplate;
