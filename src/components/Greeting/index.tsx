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
        I&nbsp;love the movie Back to&nbsp;the Future, Progressive Metal music,
        and biking. Isn&rsquo;t it&nbsp;time to&nbsp;take a&nbsp;ride
        in&nbsp;the evening park? The road not only offers landscapes but also
        ideas. 🤔
        <br />
        Since 2015, I&rsquo;ve been actively involved in&nbsp;the&nbsp;IT field.
        Since 2018, I&rsquo;ve been paying special attention to&nbsp;user
        interface development. I&nbsp;strive for concrete and measurable
        results, making decisions based on&nbsp;proven hypotheses.
        <br />
        I&nbsp;believe that the balance between user convenience and increasing
        company profits is&nbsp;the key to&nbsp;success.
      </p>
    </section>
  );
};
