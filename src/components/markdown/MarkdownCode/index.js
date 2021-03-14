import React, { useState } from 'react';
import PropTypes from 'prop-types';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { nightOwl } from 'react-syntax-highlighter/dist/cjs/styles/hljs';
import { MdVisibility, MdVisibilityOff } from 'react-icons/md';
import Button from '../../shared/Button';
import * as S from './styled';

const MarkdownCode = ({ language, value }) => {
  // Implementing state to expand code on click, to reduce page height
  const [open, setOpen] = useState(false);
  const customStyling = {
    backgroundColor: 'hsl(213, 80%, 12%)',
    fontSize: '16px',
    lineHeight: '1.5',
    overflowX: open ? 'auto' : 'hidden',
    overflowY: 'hidden',
    padding: '2.4rem',
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
        variation="secondary"
        icon={open ? <MdVisibilityOff /> : <MdVisibility />}
      >
        {open ? 'Hide code' : 'Show code'}
      </Button>
      <S.Container open={open}>
        <S.MenuBar>
          <S.Language>{language === 'javascript' ? 'JS' : language}</S.Language>
        </S.MenuBar>
        <SyntaxHighlighter
          style={nightOwl}
          language={language}
          customStyle={customStyling}
        >
          {value}
        </SyntaxHighlighter>
      </S.Container>
    </S.Wrapper>
  );
};

export default MarkdownCode;

MarkdownCode.propTypes = {
  language: PropTypes.oneOf(['javascript', 'html']).isRequired,
  value: PropTypes.node.isRequired,
};
