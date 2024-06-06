'use client';

import type { Case } from '@/data/types';
import React, { FC, useLayoutEffect, useRef } from 'react';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react';
import './styles.scss';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { Slide } from '../Slide';

type Props = { isLoadingEnds: boolean; cases: Case[] };

export const Slider: FC<Props> = ({ isLoadingEnds, cases }) => {
  const swiperRef = useRef<SwiperRef | null>(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (!isLoadingEnds) {
      return;
    }

    const tl = gsap
      .timeline({
        scrollTrigger: {
          trigger: swiperRef.current as any,
          start: 'top 75%',
          end: '20px 80%',
        },

        yoyo: true,
      })
      .fromTo(
        swiperRef.current,
        {
          opacity: 0,
          y: 40,
          stagger: { each: 300 },
        },
        {
          opacity: 1,
          y: 0,
          stagger: { each: 300 },
        },
      );
  }, [isLoadingEnds]);

  return (
    <Swiper
      ref={swiperRef}
      loop={true}
      slidesPerView={1}
      navigation={true}
      modules={[Navigation]}
      spaceBetween={16}
      setWrapperSize={true}
      breakpoints={{
        768: {
          spaceBetween: 24,
        },
        1440: {
          spaceBetween: 32,
        },
        1441: {
          spaceBetween: 48,
        },

        1920: {
          spaceBetween: 48,
        },
      }}
    >
      {cases.length > 0 &&
        [...cases, ...cases, ...cases].map((item, i) => (
          <SwiperSlide key={i} className="wrapper">
            <Slide key={item.id} slide={item} />
          </SwiperSlide>
        ))}
    </Swiper>
  );
};
