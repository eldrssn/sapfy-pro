import React, { FC, useLayoutEffect, useRef } from 'react';
import style from './styles.module.scss';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { Fact } from '@/data/types';

type Props = {
  facts: Fact[];
};

export const Facts: FC<Props> = ({ facts }) => {
  const questionsRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const tl = gsap
      .timeline({
        scrollTrigger: {
          trigger: questionsRef.current,
          start: 'top 75%',
          end: '20px 80%',
        },

        yoyo: true,
      })
      .fromTo(
        questionsRef.current,
        {
          opacity: 0,
          y: 40,
        },
        {
          opacity: 1,
          y: 0,
        },
      );
  }, []);
  return (
    <section className={style.questions} ref={questionsRef}>
      {facts.map(({ title, description, id }) => (
        <div className={style.question} key={id}>
          <h3 className={style.title}>{title}</h3>
          <p className={style.description}>{description}</p>
        </div>
      ))}
    </section>
  );
};
