import Image from 'next/image';
import React, { useLayoutEffect, useRef } from 'react';
import backgroundImage2 from '../../../public/img/bg-2.png';
import style from './styles.module.scss';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

function GalleryFooter({ crow }: { crow?: boolean }) {
  const img1Ref = useRef<HTMLDivElement | null>(null);
  const img2Ref = useRef<HTMLDivElement | null>(null);
  const img3Ref = useRef<HTMLDivElement | null>(null);
  const startRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: '#gallery-footer',
            start: 'top 75%',
            end: '20px 80%',
          },
          yoyo: true,
        })
        .fromTo(
          [img1Ref.current, img2Ref.current, img3Ref.current],
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
    });
  }, []);

  const scrollImg11Ref = useRef<HTMLImageElement | null>(null);
  const scrollImg12Ref = useRef<HTMLImageElement | null>(null);
  const scrollImg13Ref = useRef<HTMLImageElement | null>(null);

  const scrollImg21Ref = useRef<HTMLImageElement | null>(null);

  const scrollImg31Ref = useRef<HTMLImageElement | null>(null);
  const scrollImg32Ref = useRef<HTMLImageElement | null>(null);
  const scrollImg33Ref = useRef<HTMLImageElement | null>(null);

  const scrollTriggerConfig = {
    scrollTrigger: {
      trigger: '#gallery-footer',
      endTrigger: '#footer',
      start: '5% 90%',
      end: '15% 100%',
      scrub: true,
    },
  };

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.registerPlugin(ScrollTrigger);
      const img1 = gsap
        .timeline(scrollTriggerConfig)
        .to(scrollImg11Ref.current, {
          opacity: 1,
        })
        .to(scrollImg12Ref.current, {
          opacity: 1,
        })
        .to(scrollImg13Ref.current, {
          opacity: 1,
        });

      const img2 = gsap
        .timeline(scrollTriggerConfig)
        .to(scrollImg21Ref.current, {
          opacity: 1,
        })
        .to(scrollImg21Ref.current, {
          opacity: 0,
        })
        .to(scrollImg21Ref.current, {
          opacity: 0,
        });
      
        const img3 = gsap
        .timeline(scrollTriggerConfig)
        .to(scrollImg31Ref.current, {
          opacity: 1,
        })
        .to(scrollImg32Ref.current, {
          opacity: 1,
        })
        .to(scrollImg33Ref.current, {
          opacity: 1,
        });
    });
  }, []);

  return (
    <section className={style.gallery} id="gallery-footer">
      <div className={style.content} ref={startRef}>
        <div className={style.galleryImageWrapper} ref={img1Ref}>
          <Image
            src={'/img/f-1-1.png'}
            alt="Image-2"
            loading="eager"
            fill
          />
          <Image
            className={style.hiddenImg}
            ref={scrollImg11Ref}
            src={'/img/bg-1.png'}
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
          <Image
            className={style.hiddenImg}
            ref={scrollImg13Ref}
            src={'/img/bg-1.png'}
            alt="Image-2"
            loading="eager"
            fill
          />
        </div>
        <div className={style.galleryImageWrapper} ref={img2Ref}>
          <Image src={backgroundImage2} alt="Image-2" fill />
          <Image
            className={style.hiddenImg}
            ref={scrollImg21Ref}
            src={'/img/2-1.png'}
            alt="Image-2"
            loading="eager"
            fill
          />
        </div>
        <div className={style.galleryImageWrapper} ref={img3Ref}>
          <Image src={'/img/f-3-1.png'} alt="Image-3"  fill/>
          <Image
            className={style.hiddenImg}
            ref={scrollImg31Ref}
            src={'/img/f-3-2.png'}
            alt="Image-2"
            loading="eager"
            fill
          />
          <Image
            className={style.hiddenImg}
            ref={scrollImg32Ref}
            src={'/img/f-3-3.png'}
            alt="Image-2"
            loading="eager"
            fill
          />
          <Image
            className={style.hiddenImg}
            ref={scrollImg33Ref}
            src={'/img/bg-3-crow.png'}
            alt="Image-2"
            loading="eager"
            fill
          />
        </div>
      </div>
    </section>
  );
}

export default GalleryFooter;
