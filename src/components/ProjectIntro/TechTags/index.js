import React from 'react';
import PropTypes from 'prop-types';
import * as S from './styled';

const TechTags = ({ tech }) => {
  return (
    <S.Tags>
      {tech.map(t => (
        <S.Tag key={t}>{t}</S.Tag>
      ))}
    </S.Tags>
  );
};

export default TechTags;

TechTags.propTypes = {
  tech: PropTypes.arrayOf(PropTypes.string).isRequired,
};
