import { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import unified from 'unified';
import parse from 'remark-parse';
import remark2react from 'remark-react';
import unwrapImages from 'remark-unwrap-images';
import Heading from '../../shared/Typography/Heading';
import * as S from './styled';
import Paragraph from '../../shared/Typography/Paragraph';
import MarkdownImage from '../MarkdownImage';
import MarkdownCode from '../MarkdownCode';

function PrintMarkdown({ markdown }) {
  // Defining which components should be used when printing out markdown
  const MarkdownComponents = {
    H3: ({ children }) => (
      <Heading type="h3" color="blackPearl">
        {children}
      </Heading>
    ),
    H4: ({ children }) => (
      <Heading type="h4" color="blackPearl">
        {children}
      </Heading>
    ),
    H5: ({ children }) => (
      <Heading type="h5" color="blackPearl">
        {children}
      </Heading>
    ),
    Img: props => <MarkdownImage {...props} />,
    P: ({ children }) => <Paragraph color="blueBayoux">{children}</Paragraph>,
    Pre: props => <MarkdownCode {...props} />,
  };

  const content = unified()
    .use(unwrapImages)
    .use(parse)
    .use(remark2react, {
      remarkReactComponents: {
        h3: MarkdownComponents.H3,
        h4: MarkdownComponents.H4,
        h5: MarkdownComponents.H5,
        img: MarkdownComponents.Img,
        p: MarkdownComponents.P,
        pre: MarkdownComponents.Pre,
      },
    })
    .processSync(markdown).result;

  return (
    <S.Section>
      <S.Wrapper>
        <S.Markdown>{content}</S.Markdown>
      </S.Wrapper>
    </S.Section>
  );
}

export default PrintMarkdown;

PrintMarkdown.propTypes = {
  markdown: PropTypes.string.isRequired,
};
