'use client';
import classnames from 'classnames/bind';
import Footer from '@/components/Footer/Footer';
import Gallery from '@/components/Gallery/Gallery';
import Header from '@/components/Header/Header';
import Modal from '@/components/Modal/Modal';
import Nav from '@/components/Nav/Nav';
import Welcome from '@/components/Welcome/Welcome';
import { Suspense, useEffect, useMemo, useState } from 'react';
import styles from './page.module.scss';
import { Greetings } from '@/components/Greeting';
import GalleryFooter from '@/components/GallaryFooter';
import { Cases } from '@/components/Cases';
import { DIGITAL_CASES, GRAPHIC_CASES, PROCESS_CASES } from '@/data/cases';
import { Facts } from '@/components/Facts';
import { DIGITAL_FACTS, GRAPHIC_FACTS, PROCESS_FACTS } from '@/data/facts';
import { Experience } from '@/components/Experience';
import { useSearchParams, useRouter } from 'next/navigation';

const cn = classnames.bind(styles);

export default function Home(): JSX.Element {
  const [year, setYear] = useState(1995);
  const [modal, setModal] = useState(false);
  const [modalId, setModalId] = useState<number | null>(null);

  const searchParams = useSearchParams();
  const router = useRouter();

  const isLoadingEnds = year === new Date().getFullYear();

  useEffect(() => {
    if (isLoadingEnds) {
      (async () => {
        const LocomotiveScroll = (await import('locomotive-scroll' as any))
          .default;
        new LocomotiveScroll();
      })();
    }
  }, [isLoadingEnds]);

  useEffect(() => {
    const practice = searchParams?.get('practice');
    
    if (practice === 'random') {
      return;
    }

    if (practice) {
      setModalId(Number(practice));
    }
  }, []);

  const openModalHref = (id: number) => {
    setModalId(id);
    router.push(`/?practice=${id}`);
  };

  const closeModalHref = () => {
    setModalId(null);
    router.push(`/`);
  };

  return (
    <Suspense>
      {modal && (
        <Modal
          setModal={setModal}
          modal={modal}
          openModalHref={openModalHref}
          modalId={modalId}
          closeModalHref={closeModalHref}
        />
      )}
      <main
        data-scroll
        className={cn(styles.main, {
          [styles.loading]: !isLoadingEnds,
        })}
      >
        <Header isLoadingEnds={isLoadingEnds} />
        <Welcome year={year} setYear={setYear} isLoadingEnds={isLoadingEnds} />
        <Gallery crow={false} year={year} isLoadingEnds={isLoadingEnds} />

        <Cases
          isLoadingEnds={isLoadingEnds}
          title="Digital Design"
          cases={DIGITAL_CASES}
        />
        <Facts facts={DIGITAL_FACTS} />
        <Cases
          isLoadingEnds={isLoadingEnds}
          title="Graphic Design"
          cases={GRAPHIC_CASES}
        />
        <Facts facts={GRAPHIC_FACTS} />
        <Cases
          isLoadingEnds={isLoadingEnds}
          title="Process Design"
          cases={PROCESS_CASES}
        />
        <Facts facts={PROCESS_FACTS} />
        <Greetings />
        <Experience />
        <GalleryFooter crow={true} />
        <Footer />
        <Nav setModal={setModal} isLoadingEnds={isLoadingEnds} modal={modal} />
      </main>
    </Suspense>
  );
}
