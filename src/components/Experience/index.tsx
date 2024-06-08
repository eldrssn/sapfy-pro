import Link from 'next/link';
import React, { useLayoutEffect, useRef } from 'react';
import style from './styles.module.scss';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { experience } from '@/data/experience';

export const Experience = () => {
  const startRef = useRef<HTMLDivElement | null>(null);
  const avatarRef = useRef<HTMLDivElement | null>(null);
  const itemRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const tlSection = gsap
      .timeline({
        scrollTrigger: {
          trigger: startRef.current,
          start: 'top 75%',
          end: '20px 80%',
        },
        yoyo: true,
      })
      .fromTo(
        startRef.current,
        {
          opacity: 0,
          y: 40,
        },
        {
          opacity: 1,
          y: 0,
        },
      )
      .fromTo(
        avatarRef.current,
        {
          opacity: 0,
          y: 20,
        },
        {
          opacity: 1,
          y: 0,
        },
      )
      .fromTo(
        itemRef.current,
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
    <section className={style.history}>
      <div className={style.content} ref={startRef}>
        <div className={style.avatar} ref={avatarRef}>
          <video src="/video/vid.mp4" loop autoPlay muted playsInline />
        </div>

        <div className={style.list} ref={itemRef}>
          {experience.length > 0 ? (
            experience.map((element) => {
              return (
                <div key={element.id} className={style.listItem}>
                  <div className={style.header}>
                    <span className={style.years}>{element.years}</span>
                    <div className={style.link}>{element.link}</div>
                  </div>
                  <p className={style.description}>{element.description}</p>
                  <p className={style.profession}>{element.profession}</p>
                </div>
              );
            })
          ) : (
            <div className={style.listItem}>
              <div className={style.header}>
                <span className={style.years}>2020 — 2024</span>
                <Link href="/" className={style.link}>
                  Ingate
                </Link>
              </div>

              <p className={style.description}>
                Проектирование интерфейса / SEO&#8209;продвижение /
                Проектирование интерфейса
              </p>
              <p className={style.profession}>UX/UI Designer</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
