import PropTypes from 'prop-types';
import unified from 'unified';
import parse from 'remark-parse';
import remark2react from 'remark-react';
import unwrapImages from 'remark-unwrap-images';
import ReactMarkdown from 'react-markdown';
import Heading from '../../shared/Typography/Heading';
import * as S from './styled';
import Paragraph from '../../shared/Typography/Paragraph';
import MarkdownImage from '../MarkdownImage';
import MarkdownCode from '../MarkdownCode';

function PrintMarkdown({ markdown }) {
  console.log(markdown);
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
    image: props => <MarkdownImage {...props} />,
    paragraph: ({ children }) => (
      <Paragraph color="blueBayoux">{children}</Paragraph>
    ),
  };

  // const content = unified()
  //   .use(unwrapImages)
  //   .use(parse)
  //   .use(remark2react, {
  //     remarkReactComponents: {
  //       code: MarkdownComponents.Code,
  //       h3: MarkdownComponents.H3,
  //       h4: MarkdownComponents.H4,
  //       h5: MarkdownComponents.H5,
  //       img: MarkdownComponents.Img,
  //       p: MarkdownComponents.P,
  //     },
  //   })
  //   .processSync(markdown).result;

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
