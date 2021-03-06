import React from 'react';
import PropTypes from 'prop-types';
import Heading from '../../shared/Typography/Heading';
import Paragraph from '../../shared/Typography/Paragraph';
import * as S from './styled';

const ProjectsIntro = ({
  extraHeadingMargin,
  heading,
  subheading,
  alignHeading,
}) => {
  return (
    <S.Wrapper extraHeadingMargin={extraHeadingMargin}>
      <S.Container alignHeading={alignHeading}>
        {heading ? (
          <Heading type="h2" color="blackPearl">
            {heading}
          </Heading>
        ) : null}
        {subheading ? (
          <Paragraph color="blueBayoux" paddingBottom={6}>
            {subheading}
          </Paragraph>
        ) : null}
      </S.Container>
    </S.Wrapper>
  );
};

export default ProjectsIntro;

ProjectsIntro.propTypes = {
  alignHeading: PropTypes.oneOf(['center', 'left']),
  extraHeadingMargin: PropTypes.bool,
  heading: PropTypes.string.isRequired,
  subheading: PropTypes.string,
};
