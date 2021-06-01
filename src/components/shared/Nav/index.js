import React, { useState, useEffect } from 'react';
import { MdMenu, MdClose, MdHome, MdColorLens } from 'react-icons/md';
// Next imports
import Link from 'next/link';
import { useRouter } from 'next/router';
import * as S from './styled';
import useWindowSize from '../../../hooks/useWindowSize';
import Logo from '../Logo';

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

  useEffect(() => {
    setOpen(false);
  }, [router]);

  const handleMenuClose = () => {
    setOpen(false);
  };

  return (
    <S.Nav>
      <S.NavWrapper>
        <Logo />
        {isMobile ? (
          <S.Menu onClick={() => setOpen(prevOpen => !prevOpen)}>
            {open ? <MdClose /> : <MdMenu />}
          </S.Menu>
        ) : null}
        {/* If it's open and on mobile, or it's not mobile, which will only be true when brower width is > 768 */}
        <S.NavItems
          open={(open && isMobile) || !isMobile}
          onClick={e => handleMenuClose(e)}
        >
          {isMobile && open ? <S.NavBackdrop /> : null}
          <S.NavItem active={router.pathname === '/'}>
            {isMobile ? (
              <S.NavIcon>
                <MdHome />
              </S.NavIcon>
            ) : null}
            <Link href="/">Home</Link>
          </S.NavItem>
          <S.NavItem
            active={
              router.pathname === '/portfolio' ||
              router.pathname === '/portfolio/[id]'
            }
          >
            {isMobile ? (
              <S.NavIcon>
                <MdColorLens />
              </S.NavIcon>
            ) : null}
            <Link href="/portfolio">Portfolio</Link>
          </S.NavItem>
        </S.NavItems>
      </S.NavWrapper>
    </S.Nav>
  );
}

export default Nav;
