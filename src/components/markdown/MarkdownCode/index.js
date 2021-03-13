import React, { useState } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { tomorrowNightBlue } from 'react-syntax-highlighter/dist/cjs/styles/hljs';
import { MdVisibility, MdVisibilityOff } from 'react-icons/md';
import Button from '../../shared/Button';
import * as S from './styled';

const MarkdownCode = ({ language, value }) => {
  const [open, setOpen] = useState(false);
  const customStyling = {
    backgroundColor: 'hsl(213, 80%, 12%)',
    fontSize: '16px',
    lineHeight: '1.5',
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
        variation="secondary"
        icon={open ? <MdVisibilityOff /> : <MdVisibility />}
      >
        {open ? 'Hide code' : 'Show code'}
      </Button>
      <S.Container open={open}>
        <S.MenuBar>
          <S.Dots>
            <S.Dot color="red" />
            <S.Dot color="orange" />
            <S.Dot color="green" />
          </S.Dots>
          <S.Language>{language === 'javascript' ? 'JS' : language}</S.Language>
        </S.MenuBar>
        <SyntaxHighlighter
          style={tomorrowNightBlue}
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
