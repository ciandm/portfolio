import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';
import Heading from '../../shared/Typography/Heading';
import * as S from './styled';
import Paragraph from '../../shared/Typography/Paragraph';
import MarkdownImage from '../MarkdownImage';
import MarkdownCode from '../MarkdownCode';
import MarkdownLink from '../MarkdownLink';

function PrintMarkdown({ markdown }) {
  // Defining which components should be used when printing out markdown
  const renderers = {
    code: ({ language, value }) => (
      <MarkdownCode language={language} value={value} />
    ),
    heading: ({ children, level }) => {
      return (
        <Heading type={`h${level}`} color="blackPearl">
          {children}
        </Heading>
      );
    },
    link: ({ node }) => {
      return <MarkdownLink {...node} />;
    },
    paragraph: ({ children }) => {
      if (
        children &&
        children[0] &&
        children.length === 1 &&
        children[0].props &&
        children[0].props.src
      ) {
        // remove the p wrapper
        return <MarkdownImage {...children[0].props} />;
      }
      return <Paragraph color="blueBayoux">{children}</Paragraph>;
    },
  };

  return (
    <S.Section>
      <S.Wrapper>
        <S.Markdown>
          <ReactMarkdown renderers={renderers}>{markdown}</ReactMarkdown>
        </S.Markdown>
      </S.Wrapper>
    </S.Section>
  );
}

export default PrintMarkdown;

PrintMarkdown.propTypes = {
  markdown: PropTypes.string.isRequired,
};
