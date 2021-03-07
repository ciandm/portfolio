import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/cjs/styles/hljs';

const customStyling = {
  fontSize: '16px',
  lineHeight: '1.5',
  margin: '3.6rem 0',
  padding: '3.6rem',
};

const MarkdownCode = children => {
  return (
    <SyntaxHighlighter
      language="javascript"
      style={dracula}
      customStyle={customStyling}
    >
      {children[0].props.children[0]}
    </SyntaxHighlighter>
  );
};

export default MarkdownCode;
