import React from 'react';
import Link from 'next/link';
import getRandomTask from '@/utils/getRandomTask';
import { tasksData } from '@/data/dataForProps';
import style from './styles.module.scss';
import '../../app/global.scss';

function Tasks() {
  const randomTask = getRandomTask(tasksData);

  return (
    <section className={style.modalContainer}>
      <div className={style.content}>
        <h2 className={style.header}>{randomTask.taskHeader}</h2>
        <p className={style.description}>{randomTask.taskDescription}</p>
      </div>

      <Link href={'/'} className={style.closeBtn}>← закрыть</Link>
    </section>
  );
}

export default Tasks;