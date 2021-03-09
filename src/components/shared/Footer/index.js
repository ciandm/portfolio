import React from 'react';
import * as S from './styled';
import useWindowSize from '../../../hooks/useWindowSize';
import Logo from '../Logo';

const Footer = () => {
  const isTablet = useWindowSize() > 767;
  return (
    <S.Footer>
      <S.FooterWrapper>
        <Logo />
        {isTablet && (
          <S.FooterNote>Website designed and built by me 🐬</S.FooterNote>
        )}
        <S.FooterLinks>
          <S.FooterItem>
            <S.FooterLink href="https://github.com/ciandm" target="_blank">
              Github
            </S.FooterLink>
          </S.FooterItem>
          <S.FooterItem>
            <S.FooterLink
              href="https://www.linkedin.com/in/cian-dolphin-murray-92b05712a/"
              target="_blank"
            >
              LinkedIn
            </S.FooterLink>
          </S.FooterItem>
        </S.FooterLinks>
      </S.FooterWrapper>
    </S.Footer>
  );
};

export default Footer;
