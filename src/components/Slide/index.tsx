'use client';
import type { Case } from '@/data/types';
import Image from 'next/image';
import Link from 'next/link';
import React, { FC, useLayoutEffect, useRef } from 'react';
import style from './styles.module.scss';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

type Props = {
  slide: Case;
};

export const Slide: FC<Props> = ({
  slide: { title, description, link, linkTitle, firstImg, secondImg },
}) => {
  const headingRef = useRef<HTMLDivElement | null>(null);
  const descriptionRef = useRef<HTMLDivElement | null>(null);
  const linkRef = useRef<HTMLAnchorElement | null>(null);
  const startRef = useRef<HTMLDivElement | null>(null);
  const image1Ref = useRef<HTMLAnchorElement | null>(null);
  const image2Ref = useRef<HTMLAnchorElement | null>(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const tl = gsap
      .timeline({
        scrollTrigger: {
          trigger: startRef.current,
          start: 'top 75%',
          end: '20px 80%',
        },

        yoyo: true,
      })
      .fromTo(
        [
          headingRef.current,
          descriptionRef.current,
          linkRef.current,
          image1Ref.current,
          image2Ref.current,
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
  }, []);

  return (
    <section className={style.workContainer} ref={startRef}>
      <div className={style.content}>
        <div className={style.story}>
          <h3 ref={headingRef} className={style.title}>
            {title}
          </h3>
          <p ref={descriptionRef} className={style.description}>
            {description}
          </p>
          <Link ref={linkRef} href={link} target="_blank">
            {linkTitle} ↗︎
          </Link>
        </div>
        <div className={style.images}>
          <Link
            target="_blank"
            href={link}
            className={style.slideImgWrapper}
            ref={image1Ref}
          >
            <Image src={firstImg} alt="Image-1" fill loading="lazy" />
          </Link>
          <Link
            target="_blank"
            href={link}
            className={style.slideImgWrapper}
            ref={image2Ref}
          >
            <Image src={secondImg} alt="Image-2" fill loading="lazy" />
          </Link>
        </div>
      </div>
    </section>
  );
};
