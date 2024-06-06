import React, { useLayoutEffect, useRef } from 'react';
import styles from './styles.module.scss';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

export const Greetings = () => {
  const headerRef = useRef<HTMLHeadingElement | null>(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const headerTl = gsap
      .timeline({
        scrollTrigger: {
          trigger: headerRef.current,
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
  }, []);
  return (
    <section className={styles.block} id="about">
      <p ref={headerRef}>
        Я люблю фильм Back to the Future, музыку жанра Progressive Metal и
        велосипед. А не пора ли прокатиться по вечернему парку? Дорога дарит не
        только пейзажи, но и идеи. 🤔
        <br />
        С 2015 года я активно вовлечена в сферу IT. С 2018 года уделяю особое
        внимание разработке пользовательских интерфейсов. Я стремлюсь к
        конкретным и измеримым результатам, принимая решения, основанные на
        проверенных гипотезах.
        <br />Я убеждена, что баланс между удобством пользователя и повышением
        прибыли компании является ключом к успеху.
      </p>
    </section>
  );
};
