import { gsap } from 'gsap';
import classnames from 'classnames/bind';
import Link from 'next/link';
import { useEffect, useLayoutEffect, useRef } from 'react';
import style from './styles.module.scss';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useSearchParams } from 'next/navigation';

const cn = classnames.bind(style);

function Nav({
  setModal,
  isLoadingEnds,
  modal,
}: {
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
  isLoadingEnds: boolean;
  modal: boolean;
}): JSX.Element {
  const searchParams = useSearchParams();

  const overlayPathRef = useRef(null);
  const paths = {
    step1: {
      unfilled: 'M 0 100 V 100 Q 50 100 100 100 V 100 z',
      inBetween: {
        curve1: 'M 0 100 V 50 Q 50 0 100 50 V 100 z',
        curve2: 'M 0 100 V 50 Q 50 100 100 50 V 100 z',
      },
      filled: 'M 0 100 V 0 Q 50 0 100 0 V 100 z',
    },
    step2: {
      filled: 'M 0 0 V 100 Q 50 100 100 100 V 0 z',
      inBetween: {
        curve1: 'M 0 0 V 50 Q 50 0 100 50 V 0 z',
        curve2: 'M 0 0 V 50 Q 50 100 100 50 V 0 z',
      },
      unfilled: 'M 0 0 V 0 Q 50 0 100 0 V 0 z',
    },
  };

  let isAnimating = false;

  const animationBlackPhase = () => {
    if (isAnimating) return;
    isAnimating = true;

    gsap
      .timeline()
      .set(overlayPathRef.current, {
        attr: { d: paths.step1.unfilled },
      })
      .to(
        overlayPathRef.current,
        {
          duration: 1,
          ease: 'power4.in',
          attr: { d: paths.step1.inBetween.curve1 },
        },
        0,
      )
      .to(overlayPathRef.current, {
        duration: 1,
        ease: 'power1',
        attr: { d: paths.step1.filled },
        onComplete: () => setModal((prevState) => !prevState),
      })
      .set(overlayPathRef.current, {
        attr: { d: paths.step2.filled },
      });
  };

  const hideModal = () => {
    gsap
      .timeline()
      .to(overlayPathRef.current, {
        duration: 1,
        ease: 'sine.in',
        attr: { d: paths.step2.inBetween.curve1 },
      })
      .to(overlayPathRef.current, {
        duration: 1,
        ease: 'power4',
        attr: { d: paths.step2.unfilled },
      });
  };

  useEffect(() => {
    if (!modal && isLoadingEnds) {
      hideModal();
    }
  }, [modal]);

  const navRef = useRef<HTMLAnchorElement | null>(null);
  const buttonScrollUpRef = useRef<HTMLButtonElement | null>(null);

  useLayoutEffect(() => {
    const show = () => {
      const tl = gsap.timeline({}).to(navRef.current, {
        opacity: 1,
        delay: 0.8,
        duration: 0.9,
      });
    };

    if (isLoadingEnds) {
      show();
    }
  }, [isLoadingEnds]);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap
        .timeline({
          scrollTrigger: {
            scrub: true,
            trigger: '#contacts',
            start: 'top 95%',
            end: '20px 80%',
          },
        })
        .to(navRef.current, {
          opacity: 0,
          duration: 5,
          onUpdate: () => {
            if (!navRef.current) {
              return;
            }
            navRef.current.style.pointerEvents =
              navRef.current?.style.opacity === '0' ? 'none' : 'auto';
          },
        })
        .to(
          buttonScrollUpRef.current,
          {
            opacity: 1,
            duration: 5,
            onUpdate: () => {
              if (!buttonScrollUpRef.current) {
                return;
              }
              buttonScrollUpRef.current.style.pointerEvents =
                buttonScrollUpRef.current.style.opacity > '0' ? 'auto' : 'none';
            },
          },
          '<',
        );
    });
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToAnchor = (event: any) => {
    event.preventDefault();
    const targetId = event.currentTarget.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 35,
        behavior: 'smooth',
      });
    }
  };

  useEffect(() => {
    const practice = searchParams?.get('practice');
    if (practice) {
      animationBlackPhase();
    }
  }, []);

  return (
    <>
      <nav className={cn(style.nav)} ref={navRef}>
        <section className={style.links}>
          <Link
            href="#"
            onClick={(event) => {
              event.preventDefault();
              animationBlackPhase();
            }}
          >
            <span className={style.practiceText}>UX/UI practice</span> 🔥
          </Link>
          <div className={style.anchorLinks}>
            <Link onClick={scrollToAnchor} href="#cases">
              cases
            </Link>
            <Link onClick={scrollToAnchor} href="#about">
              about me
            </Link>
            <Link onClick={scrollToAnchor} href="#contacts">
              contacts
            </Link>
          </div>
        </section>
      </nav>

      <svg
        className={style.overlay}
        width="100%"
        height="100%"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <path
          ref={overlayPathRef}
          fill="#404040"
          stroke="#404040"
          vectorEffect="non-scaling-stroke"
          d="M 0 100 V 100 Q 50 100 100 100 V 100 z"
        />
      </svg>

      <button
        ref={buttonScrollUpRef}
        className={style.buttonScrollUp}
        type="button"
        onClick={scrollToTop}
      >
        ↑ go back up
      </button>
    </>
  );
}

export default Nav;
