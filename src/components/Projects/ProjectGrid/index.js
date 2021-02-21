import React from 'react';
import PropTypes from 'prop-types';
import * as S from './styled';

function ProjectGrid({ children }) {
  return <S.Grid>{children}</S.Grid>;
}

export default ProjectGrid;

ProjectGrid.propTypes = {
  children: PropTypes.node.isRequired,
};
