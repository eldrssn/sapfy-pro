import { tasks } from '@/data/tasks';
import getRandomTask from '@/utils/getRandomTask';
import { gsap } from 'gsap';
import type React from 'react';
import { useLayoutEffect, useRef } from 'react';
import style from './styles.module.scss';
import './styles.css';

interface ModalProps {
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
  modal: boolean;
  openModalHref: (id: number) => void;
  modalId: number | null;
  closeModalHref: () => void;
}

function Modal({
  setModal,
  modal,
  modalId,
  closeModalHref,
  openModalHref,
}: ModalProps) {
  const task = modalId
    ? tasks.find((el) => el.id === modalId)
    : getRandomTask(tasks);
  const headerRef = useRef(null);
  const descriptionRef = useRef(null);
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

  const closeBtnRef = useRef(null);

  const showContent = () => {
    const tl = gsap.timeline();
    tl.fromTo(
      headerRef.current,
      { opacity: 0, duration: 0.5 },
      { opacity: 1, duration: 0.5 },
    )
      .fromTo(
        descriptionRef.current,
        { opacity: 0, duration: 0.5 },
        { opacity: 1, duration: 0.5 },
      )
      .fromTo(
        closeBtnRef.current,
        { opacity: 0, duration: 0.5 },
        { opacity: 1, duration: 0.5 },
      );
    return tl;
  };

  const hideContent = () => {
    const tl = gsap.timeline();
    tl.fromTo(
      closeBtnRef.current,
      { opacity: 1, duration: 0.5 },
      { opacity: 0, duration: 0.5 },
    )
      .fromTo(
        descriptionRef.current,
        { opacity: 1, duration: 0.5 },
        { opacity: 0, duration: 0.5 },
      )
      .fromTo(
        headerRef.current,
        { opacity: 1, duration: 0.5 },
        { opacity: 0, duration: 0.5 },
      );

    return tl;
  };

  useLayoutEffect(() => {
    if (modal) {
      showContent();
      task?.id && openModalHref(task.id);
    }
  }, [modal]);

  const animationWhitePhase = () => {
    gsap
      .timeline()
      .set(overlayPathRef.current, {
        attr: { d: paths.step1.filled },
        onComplete: () => setModal((prevState) => !prevState),
      })
      .to(overlayPathRef.current, {
        duration: 1,
        ease: 'sine.in',
        attr: { d: paths.step1.inBetween.curve2 },
      })
      .to(overlayPathRef.current, {
        duration: 1,
        ease: 'power4',
        attr: { d: paths.step1.unfilled },
      });
  };

  const handleClose = () => {
    hideContent().then(() => {
      animationWhitePhase();
      closeModalHref();
    });
  };

  return (
    <>
      <section
        className={style.modalContainer}
        id="modal-container"
        data-lenis-prevent
      >
        <div className={style.content}>
          <h2 ref={headerRef} className={style.header}>
            {task?.title}
          </h2>
          {task && (
            <div
              ref={descriptionRef}
              className={style.description}
              dangerouslySetInnerHTML={{ __html: task.body }}
            ></div>
          )}
        </div>

        <div ref={closeBtnRef} className={style.closeBtn} onClick={handleClose}>
          ← close
        </div>
      </section>
    </>
  );
}

export default Modal;
