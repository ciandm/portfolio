import PropTypes from 'prop-types';
import unified from 'unified';
import parse from 'remark-parse';
import remark2react from 'remark-react';
import Heading from '../shared/Typography/Heading';
import * as S from './styled';
import Paragraph from '../shared/Typography/Paragraph';

function PrintMarkdown({ markdown }) {
  const MarkdownComponents = {
    H1: ({ children }) => (
      <Heading type="h2" color="blackPearl">
        {children}
      </Heading>
    ),
    H2: ({ children }) => (
      <Heading type="h2" color="blackPearl">
        {children}
      </Heading>
    ),
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
    P: ({ children }) => <Paragraph color="blueBayoux">{children}</Paragraph>,
  };

  const content = unified()
    .use(parse)
    .use(remark2react, {
      remarkReactComponents: {
        h3: MarkdownComponents.H3,
        p: MarkdownComponents.P,
      },
    })
    .processSync(markdown).result;

  return <S.Markdown>{content}</S.Markdown>;
}

export default PrintMarkdown;

PrintMarkdown.propTypes = {
  markdown: PropTypes.string.isRequired,
};
