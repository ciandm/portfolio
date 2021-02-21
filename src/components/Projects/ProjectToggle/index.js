import React from 'react';
import { MdBrush, MdCode } from 'react-icons/md';
import * as S from './styled';

function ProjectToggle({ activeDisplay, updateDisplay }) {
  return (
    <S.ToggleContainer>
      <S.Toggle
        active={activeDisplay === 'design'}
        onClick={() => updateDisplay('design')}
      >
        Design <MdBrush />
      </S.Toggle>
      <S.Toggle
        active={activeDisplay === 'coding'}
        onClick={() => updateDisplay('coding')}
      >
        Coding <MdCode />
      </S.Toggle>
      <S.Slide active={activeDisplay} />
    </S.ToggleContainer>
  );
}

export default ProjectToggle;
