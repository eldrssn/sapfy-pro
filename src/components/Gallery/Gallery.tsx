import Image from 'next/image';
import React, { useLayoutEffect, useRef } from 'react';
import backgroundImage1 from '../../../public/img/bg-1.png';
import backgroundImage2 from '../../../public/img/bg-2.png';
import backgroundImage3 from '../../../public/img/bg-3.png';
import style from './styles.module.scss';
import backgroundBalckImage1 from '../../../public/img/bg-1-b.png';
import backgroundBalckImage2 from '../../../public/img/bg-2-b.png';
import backgroundBalckImage3 from '../../../public/img/bg-3-b.png';
import gsap from 'gsap';
import classNames from 'classnames/bind';
import ScrollTrigger from 'gsap/ScrollTrigger';

const cn = classNames.bind(style);

function Gallery({
  crow,
  year,
  isLoadingEnds,
}: {
  crow: boolean;
  year: number;
  isLoadingEnds: boolean;
}) {
  const img1Ref = useRef<HTMLDivElement | null>(null);
  const img2Ref = useRef<HTMLDivElement | null>(null);
  const img3Ref = useRef<HTMLDivElement | null>(null);

  const scrollImg11Ref = useRef<HTMLImageElement | null>(null);
  const scrollImg12Ref = useRef<HTMLImageElement | null>(null);
  const scrollImg1DefRef = useRef<HTMLImageElement | null>(null);
  const scrollImgCrow1Ref = useRef<HTMLImageElement | null>(null);

  const scrollImg21Ref = useRef<HTMLImageElement | null>(null);
  const scrollImg22Ref = useRef<HTMLImageElement | null>(null);
  const scrollImg2DefRef = useRef<HTMLImageElement | null>(null);
  const scrollImgCrow2Ref = useRef<HTMLImageElement | null>(null);

  const scrollImg31Ref = useRef<HTMLImageElement | null>(null);
  const scrollImg32Ref = useRef<HTMLImageElement | null>(null);
  const scrollImg3DefRef = useRef<HTMLImageElement | null>(null);
  const scrollImgCrow3Ref = useRef<HTMLImageElement | null>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap
        .timeline({})
        .to([img1Ref.current, img2Ref.current, img3Ref.current], {
          opacity: 1,
          stagger: 0.15,
        });
    });
  }, []);

  useLayoutEffect(() => {
    const isDesktop = window.innerWidth >= 767;
    const scrollTriggerConfig = {
      scrollTrigger: {
        trigger: '#welcome-text',
        endTrigger: '#cases',
        start: isDesktop ? '-50% top' : '-20% top',
        end: isDesktop ? '15% 50%' : '30% 50%',
        scrub: true,
      },
    };

    const ctx = gsap.context(() => {
      gsap.registerPlugin(ScrollTrigger);
      const img1 = gsap
        .timeline(scrollTriggerConfig)
        .to(scrollImg11Ref.current, {
          opacity: 1,
        })
        .to(scrollImgCrow1Ref.current, {
          opacity: 1,
        })
        .to(scrollImgCrow1Ref.current, {
          opacity: 0,
        })
        .to(
          scrollImg11Ref.current,
          {
            opacity: 0,
          },
          '<',
        )
        .to(scrollImg1DefRef.current, {
          opacity: 1,
        })
        .to(scrollImg12Ref.current, {
          opacity: 1,
        })
        .to(scrollImg12Ref.current, {
          opacity: 0,
        });

      const img2 = gsap
        .timeline(scrollTriggerConfig)
        .to(scrollImg21Ref.current, {
          opacity: 1,
        })

        .to(scrollImg22Ref.current, {
          opacity: 1,
        })
        .to(scrollImgCrow2Ref.current, {
          opacity: 1,
        })
        .to(scrollImgCrow2Ref.current, {
          opacity: 0,
        })
        .to(
          scrollImg22Ref.current,
          {
            opacity: 0,
          },
          '<',
        )
        .to(scrollImg2DefRef.current, {
          opacity: 1,
        })
        .to(scrollImg21Ref.current, {
          opacity: 0,
        });

      const img3 = gsap
        .timeline(scrollTriggerConfig)
        .to(scrollImg3DefRef.current, {
          opacity: 1,
        })
        .to(scrollImg31Ref.current, {
          opacity: 1,
        })
        .to(scrollImg32Ref.current, {
          opacity: 1,
        })
        .to(scrollImgCrow3Ref.current, {
          opacity: 1,
        })
        .to(scrollImgCrow3Ref.current, {
          opacity: 0,
        })
        .to(
          scrollImg31Ref.current,
          {
            opacity: 0,
          },
          '<',
        )
        .to(
          scrollImg32Ref.current,
          {
            opacity: 0,
          },
          '<',
        );
    });
  }, []);

  return (
    <section className={style.gallery}>
      <div className={style.content}>
        <div className={style.galleryImageWrapper} ref={img1Ref}>
          {!isLoadingEnds && (
            <Image
              src={backgroundBalckImage1}
              alt="Image-2"
              fill
              loading="eager"
            />
          )}
          <Image
            className={cn(style.hiddenImg, {
              [style.show]: year > 2010,
            })}
            src={backgroundImage1}
            alt="Image-2"
            loading="eager"
            fill
          />
          <Image
            ref={scrollImg1DefRef}
            className={cn(style.hiddenImg, {
              [style.show]: year > 2010,
            })}
            src={backgroundImage1}
            alt="Image-2"
            loading="eager"
            fill
          />
          <Image
            className={style.hiddenImg}
            ref={scrollImg11Ref}
            src={'/img/1-1.png'}
            alt="Image-2"
            loading="eager"
            fill
          />
          <Image
            className={style.hiddenImg}
            ref={scrollImgCrow1Ref}
            src={'/img/crow-1.png'}
            alt="Image-2"
            loading="eager"
            fill
          />
          <Image
            className={style.hiddenImg}
            ref={scrollImg12Ref}
            src={'/img/1-2.png'}
            alt="Image-2"
            loading="eager"
            fill
          />
        </div>
        <div className={style.galleryImageWrapper} ref={img2Ref}>
          {!isLoadingEnds && (
            <Image
              src={backgroundBalckImage2}
              alt="Image-2"
              fill
              loading="eager"
            />
          )}

          <Image
            className={cn(style.hiddenImg, {
              [style.show]: year > 2017,
            })}
            src={backgroundImage2}
            alt="Image-2"
            fill
            loading="eager"
          />
          <Image
            className={cn(style.hiddenImg, {
              [style.show]: year > 2017,
            })}
            ref={scrollImg2DefRef}
            src={backgroundImage2}
            alt="Image-2"
            fill
            loading="eager"
          />
          <Image
            className={style.hiddenImg}
            ref={scrollImg21Ref}
            src={'/img/2-1.png'}
            alt="Image-2"
            loading="eager"
            fill
          />
          <Image
            className={style.hiddenImg}
            ref={scrollImg22Ref}
            src={'/img/2-2.png'}
            alt="Image-2"
            loading="eager"
            fill
          />
          <Image
            className={style.hiddenImg}
            ref={scrollImgCrow2Ref}
            src={'/img/crow-2.png'}
            alt="Image-2"
            loading="eager"
            fill
          />
        </div>
        <div className={style.galleryImageWrapper} ref={img3Ref}>
          {!isLoadingEnds && (
            <Image
              src={backgroundBalckImage3}
              alt="Image-3"
              fill
              loading="eager"
            />
          )}
          <Image
            className={cn(style.hiddenImg, {
              [style.show]: year > 2022,
            })}
            src={backgroundImage3}
            alt="Image-3"
            fill
            loading="eager"
          />
          <Image
            className={cn(style.hiddenImg, {
              [style.show]: year > 2022,
            })}
            src={backgroundImage3}
            alt="Image-3"
            fill
            loading="eager"
            ref={scrollImg3DefRef}
          />
          <Image
            className={style.hiddenImg}
            ref={scrollImg31Ref}
            src={'/img/3-1.png'}
            alt="Image-2"
            loading="eager"
            fill
          />
          <Image
            className={style.hiddenImg}
            ref={scrollImg32Ref}
            src={'/img/3-2.png'}
            alt="Image-2"
            loading="eager"
            fill
          />
          <Image
            className={style.hiddenImg}
            ref={scrollImgCrow3Ref}
            src={'/img/crow-3.png'}
            alt="Image-2"
            loading="eager"
            fill
          />
        </div>
      </div>
    </section>
  );
}

export default Gallery;
