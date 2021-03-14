import React from 'react';
import Link from 'next/link';

const MarkdownLink = ({ children, url }) => {
  // Use nextjs router link rather than regular a tags
  return <Link href={url}>{children[0].value}</Link>;
};

export default MarkdownLink;
