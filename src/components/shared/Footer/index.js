import React from 'react';
import { SiGithub } from 'react-icons/si';
import Link from 'next/link';
import * as S from './styled';
import Paragraph from '../Typography/Paragraph';

const Footer = () => {
  return (
    <S.Footer>
      <S.FooterWrapper>
        <Link href="/" passHref>
          <S.Icon>
            <SiGithub />
          </S.Icon>
        </Link>
        <Paragraph color="white">
          Designed and built by myself, <strong>Cian Dolphin</strong>, with
          Figma & React.
        </Paragraph>
      </S.FooterWrapper>
    </S.Footer>
  );
};

export default Footer;
