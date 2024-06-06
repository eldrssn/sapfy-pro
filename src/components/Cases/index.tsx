'use client';
import React, { FC, useLayoutEffect, useRef } from 'react';
import style from './styles.module.scss';
import { Slider } from '../Slider';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { Case } from '@/data/types';

type Props = {
  isLoadingEnds: boolean;
  title: string;
  cases: Case[];
};
export const Cases: FC<Props> = ({ isLoadingEnds, title, cases }) => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const headerRef = useRef<HTMLHeadingElement | null>(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (!isLoadingEnds) {
      return;
    }
    const tlSection = gsap
      .timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
          end: '20px 80%',
        },
        yoyo: true,
      })
      .fromTo(
        sectionRef.current,
        {
          opacity: 0,
          y: 40,
        },
        {
          opacity: 1,
          y: 0,
        },
      );

    const headerTl = gsap
      .timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
          end: '20px 80%',
        },
      })
      .fromTo(
        headerRef.current,
        {
          opacity: 0,
          y: 40,
        },
        {
          opacity: 1,
          y: 0,
        },
      );
  }, [isLoadingEnds]);

  return (
    <section className={style.worksContainer} ref={sectionRef} id="cases">
      <h2 ref={headerRef} className={style.header}>
        {title}
      </h2>
      <Slider isLoadingEnds={isLoadingEnds} cases={cases} />
    </section>
  );
};
