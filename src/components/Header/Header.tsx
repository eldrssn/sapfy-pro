import Image from 'next/image';
import Link from 'next/link';
import React, { useLayoutEffect, useRef } from 'react';
import classnames from 'classnames/bind';
import style from './styles.module.scss';
import gsap from 'gsap';

const cn = classnames.bind(style);

function Header({ isLoadingEnds }: { isLoadingEnds: boolean }): JSX.Element {
  const headerRef = useRef<HTMLAnchorElement | null>(null);
  useLayoutEffect(() => {
    const show = () => {
      const tl = gsap.timeline({}).to(headerRef.current, {
        opacity: 1,
        delay: 0.8,
      });
    };

    if (isLoadingEnds) {
      show();
    }
  }, [isLoadingEnds]);
  return (
    <header ref={headerRef} className={cn(style.header)}>
      <Link href="/" className={style.logoLink}>
        <Image
          src="./img/logo.svg"
          width={32}
          height={32}
          alt="Logo"
          loading="lazy"
        />
        <span className={style.logoText}>sapfy</span>
      </Link>

      <ul className={style.links}>
        <li>
          <Link href="https://sapfy.ru/">ru</Link>
        </li>
        <li>
          <Link href="https://www.dropbox.com/scl/fi/wv5qdrwb7tnoe6f7m7h1l/CV_Svetlana-Bautina.pdf?rlkey=am0q13l49o8n2jig0eyv2annv&dl=0" target='_blank'>
            cv
          </Link>
        </li>
        <li>
          <Link href="https://t.me/sapfy" target='_blank'>telegram</Link>
        </li>
        <li>
          <Link href="https://pay.cloudtips.ru/p/d65a7d3a" target='_blank'>support 🌿</Link>
        </li>
      </ul>
    </header>
  );
}

export default Header;
