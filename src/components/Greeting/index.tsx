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
        I love the movie Back to the Future, Progressive Metal music, and
        biking. Isn't it time to take a ride in the evening park? The road not
        only offers landscapes but also ideas. 🤔
        <br />
        Since 2015, I've been actively involved in the IT field. Since 2018,
        I've been paying special attention to user interface development. I
        strive for concrete and measurable results, making decisions based on
        proven hypotheses.
        <br />I believe that the balance between user convenience and increasing
        company profits is the key to success.
      </p>
    </section>
  );
};
