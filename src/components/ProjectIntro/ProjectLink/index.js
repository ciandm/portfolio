import React from 'react';
import PropTypes from 'prop-types';
import { MdArrowForward } from 'react-icons/md';
import { SiGithub } from 'react-icons/si';
import * as S from './styled';

function ProjectLink({ links }) {
  return (
    <S.ProjectLinks>
      {links.map(link => (
        <S.ProjectLink key={link.href} href={link.href} target="_blank" as="a">
          {link.linkText} {link.github ? <SiGithub /> : <MdArrowForward />}
        </S.ProjectLink>
      ))}
      ;
    </S.ProjectLinks>
  );
}

export default ProjectLink;

ProjectLink.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      github: PropTypes.bool,
      href: PropTypes.string.isRequired,
      linkText: PropTypes.string.isRequired,
    }).isRequired
  ),
};
