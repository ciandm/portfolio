import React from 'react';
import Nav from '../Nav';
import Footer from '../Footer';

function PageTemplate({ children }) {
  return (
    <>
      <Nav />
      {children}
      <Footer />
    </>
  );
}

export default PageTemplate;
