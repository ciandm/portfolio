import React from 'react';
import { MdBrush, MdCode } from 'react-icons/md';
import * as S from './styled';

function ProjectToggle({ activeDisplay, updateDisplay }) {
  return (
    <S.ToggleContainer>
      <S.Toggle
        active={activeDisplay === 'Design'}
        onClick={() => updateDisplay('Design')}
      >
        Design <MdBrush />
      </S.Toggle>
      <S.Toggle
        active={activeDisplay === 'Coding'}
        onClick={() => updateDisplay('Coding')}
      >
        Coding <MdCode />
      </S.Toggle>
      <S.Slide active={activeDisplay} />
    </S.ToggleContainer>
  );
}

export default ProjectToggle;
