import Image from 'next/image';
import Link from 'next/link';
import React, { useLayoutEffect, useRef } from 'react';
import style from './styles.module.scss';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

function Footer(): JSX.Element {
  const link1Ref = useRef<HTMLLIElement | null>(null);
  const link2Ref = useRef<HTMLLIElement | null>(null);
  const link3Ref = useRef<HTMLLIElement | null>(null);
  const link4Ref = useRef<HTMLLIElement | null>(null);
  const footerRef = useRef<HTMLDivElement | null>(null);
  const startRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: startRef.current,
            start: 'top 90%',
            end: '20px 80%',
          },
          yoyo: true,
        })
        .fromTo(
          [
            link1Ref.current,
            link2Ref.current,
            link3Ref.current,
            link4Ref.current,
            footerRef.current,
          ],
          {
            opacity: 0,
            y: 40,
            stagger: 0.2,
          },
          {
            opacity: 1,
            y: 0,
            stagger: 0.2,
          },
        );
    });
  }, []);

  return (
    <>
      <section className={style.contacts} ref={startRef} id="contacts">
        <ul>
          <li ref={link1Ref}>
            <Link href="https://t.me/sapfy" target="_blank">
              t.me/sapfy ↗
            </Link>
          </li>
          <li ref={link2Ref}>
            <Link href="mailto:vis.sapfy@gmail.com" target="_blank">
              email/sapfy ↗
            </Link>
          </li>
          <li ref={link3Ref}>
            <Link href="https://dribbble.com/sapfy" target="_blank">
              dribbble.com/sapfy ↗
            </Link>
          </li>
          <li ref={link4Ref}>
            <Link href="https://linkedin.com/in/sapfy" target="_blank">
              linkedin.com/in/sapfy ↗
            </Link>
          </li>
        </ul>
      </section>
      <footer className={style.footer} ref={footerRef} id="footer">
        <section className={style.logo}>
          <Link href="/" className={style.logoLink}>
            <Image src="./img/logo.svg" width={32} height={32} alt="Logo" />
            <p className={style.logoText}>
              sapfy in {new Date().getFullYear()} ©
            </p>
          </Link>
        </section>

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
      </footer>
    </>
  );
}

export default Footer;
