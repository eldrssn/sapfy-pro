import React, { useEffect, useLayoutEffect, useRef } from 'react';
import style from './styles.module.scss';
import gsap from 'gsap';

function Welcome({
  year,
  setYear,
  isLoadingEnds,
}: {
  year: number;
  setYear: React.Dispatch<React.SetStateAction<number>>;
  isLoadingEnds: boolean;
}) {
  const currentYear = new Date().getFullYear();
  const yearsRef = useRef<HTMLDivElement | null>(null);
  const headerRef = useRef<HTMLHeadingElement | null>(null);

  useLayoutEffect(() => {
    if (isLoadingEnds) {
      return;
    }

    gsap.to(yearsRef.current, {
      innerText: currentYear,
      duration: 2.25,
      snap: {
        innerText: 1,
      },
      ease: 'none',
      stagger: 1,
      onUpdate() {
        const newYear = Math.round(this.targets()[0].innerText);
        setYear(newYear);
      },
    });
  }, [isLoadingEnds]);

  useLayoutEffect(() => {
    const tl = gsap.timeline({}).to(yearsRef.current, {
      opacity: 1,
    });

    if (isLoadingEnds) {
      tl.reverse();
    }
    return () => {
      tl.kill();
    };
  }, [isLoadingEnds]);

  useEffect(() => {
    if (isLoadingEnds) {
      hide();
    }

    function hide() {
      let tl = gsap.timeline();
      tl.to(yearsRef.current, {
        opacity: 0,
      }).fromTo(
        headerRef.current,
        {
          opacity: 0,
          y: 20,
        },
        {
          opacity: 1,
          y: 0,
        },
      );
      return tl;
    }

    return;
  }, [isLoadingEnds]);

  return (
    <section className={style.block}>
      <div className={style.yearsContainer}>
        <h2 ref={yearsRef} className={style.years}>
          {year}
        </h2>
      </div>
      <h1 ref={headerRef} id="welcome-text">
      Hello, I'm Svetlana Bautina — a UX/UI designer. Currently, I'm focused on developing comprehensive solutions in the field of product design.
        <br />
        My goal is to make the world more convenient and accessible through user interface design.
      </h1>
    </section>
  );
}

export default Welcome;
