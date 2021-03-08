import React, { useState } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/cjs/styles/hljs';
import Button from '../../shared/Button';
import * as S from './styled';

const MarkdownCode = ({ children }) => {
  const [open, setOpen] = useState(false);
  const customStyling = {
    backgroundColor: 'hsl(213, 80%, 12%)',
    fontSize: '16px',
    lineHeight: '1.5',
    // margin: '3.6rem 0',
    overflowX: open ? 'auto' : 'hidden',
    overflowY: 'hidden',
    padding: '3.6rem',
  };

  const handleCodeToggle = () => {
    setOpen(prev => !prev);
  };

  return (
    <S.Wrapper>
      <Button
        alignSelf="flex-start"
        handleButtonClick={handleCodeToggle}
        as="button"
        variation="primary"
      >
        {open ? 'Hide code' : 'Show code'}
      </Button>
      <S.Container open={open}>
        <SyntaxHighlighter
          style={dracula}
          language="javascript"
          customStyle={customStyling}
        >
          {children[0].props.children[0]}
        </SyntaxHighlighter>
      </S.Container>
    </S.Wrapper>
  );
};

export default MarkdownCode;
