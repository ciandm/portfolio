import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Logo = () => {
  return (
    <div style={{ position: 'relative' }}>
      <Link href="/" passHref>
        <a>
          <Image
            src="/images/portfolio-logo.svg"
            alt="Cian Dolphin logo"
            height={16}
            width={200}
          />
        </a>
      </Link>
    </div>
  );
};

export default Logo;
