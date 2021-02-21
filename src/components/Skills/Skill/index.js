import React from 'react';
import PropTypes from 'prop-types';
import * as S from './styled';
// Components
import Paragraph from '../../shared/Typography/Paragraph';
import Heading from '../../shared/Typography/Heading';

const Skill = ({ heading, paragraph, iconBackground }) => {
  return (
    <S.Skill>
      <S.Icon background={iconBackground} />
      <Heading type="h4" color="blackPearl">
        {heading}
      </Heading>
      <Paragraph color="blueBayoux">{paragraph}</Paragraph>
    </S.Skill>
  );
};

export default Skill;

Skill.propTypes = {
  heading: PropTypes.string.isRequired,
  iconBackground: PropTypes.oneOf([
    'fringyFlower',
    'cinderella',
    'cherub',
    'selago',
  ]).isRequired,
  paragraph: PropTypes.string.isRequired,
};
