import Link from 'next/link';
import Image from 'next/image';
import style from './page.module.scss';
import backgroundImage1 from '../../public/img/bg-1.png';
import backgroundImage2 from '../../public/img/bg-2.png';
import backgroundImage3 from '../../public/img/bg-3.png';

function Custom404() {
  return (
    <section className={style.container}>
      <div className={style.notFoundContent}>
        <h1>
          404 <br />
          Ты заблудился в лесу 😔
        </h1>
        <Link href='/'>На главную ↗</Link>
      </div>
      
      <div className={style.gallery}>
        <Image src={backgroundImage1} width={500} height={300} alt="Image-1" loading='lazy'/>
        <Image src={backgroundImage2} width={500} height={300} alt="Image-2" loading='lazy'/>
        <Image src={backgroundImage3} width={500} height={300} alt="Image-3" loading='lazy'/>
      </div>
    </section>
  );
}

export default Custom404;