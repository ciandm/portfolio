import React, { useState, useEffect } from 'react';
import {
  MdMenu,
  MdClose,
  MdHome,
  MdColorLens,
  MdMessage,
} from 'react-icons/md';
// Next imports
import Link from 'next/link';
import { useRouter } from 'next/router';
//
import * as S from './styled';
import useWindowSize from '../../../hooks/useWindowSize';

function Nav() {
  const [open, setOpen] = useState(false);
  const isMobile = useWindowSize() < 768;

  useEffect(() => {
    // reset open, so nav items are visible on desktop
    if (!isMobile) {
      setOpen(false);
    }
  }, [isMobile]);

  const router = useRouter();

  return (
    <S.Nav>
      <S.NavWrapper>
        <S.LogoContainer />
        {isMobile ? (
          <S.Menu onClick={() => setOpen(prevOpen => !prevOpen)}>
            {open ? <MdClose /> : <MdMenu />}
          </S.Menu>
        ) : null}
        <S.NavItems open={(open && isMobile) || !isMobile}>
          <S.NavItem active={router.pathname === '/'}>
            {isMobile ? (
              <S.NavIcon>
                <MdHome />
              </S.NavIcon>
            ) : null}
            <Link href="/">Home</Link>
          </S.NavItem>
          <S.NavItem active={router.pathname === '/portfolio'}>
            {isMobile ? (
              <S.NavIcon>
                <MdColorLens />
              </S.NavIcon>
            ) : null}
            <Link href="/portfolio">Portfolio</Link>
          </S.NavItem>
          <S.NavItem active={router.pathname === '/contact'}>
            {isMobile ? (
              <S.NavIcon>
                <MdMessage />
              </S.NavIcon>
            ) : null}
            <Link href="/contact">Get in touch</Link>
          </S.NavItem>
        </S.NavItems>
      </S.NavWrapper>
    </S.Nav>
  );
}

export default Nav;
