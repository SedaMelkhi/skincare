import { FC } from 'react';

import Title from '@/components/other/title/title';
import Header from './header/header';
import Accordion from './accordion/accordion';

import style from './journal.module.sass';
import Link from 'next/link';

const Journal: FC = () => {
  return (
    <section className={style.journal}>
      <div className={style.title}>
        <Link href="/journal">
          <Title text="журнал" />
        </Link>
      </div>
      <div className={style.left__wrap}>
        <div className={style.left}>
          <Header />
          <Accordion />
        </div>
      </div>
    </section>
  );
};
export default Journal;
