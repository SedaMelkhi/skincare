import { FC } from 'react';

import style from './journal.module.sass';
import Title from '@/components/other/title/title';
import Header from './header/header';
import Accordion from './accordion/accordion';

const Journal: FC = () => {
  return (
    <section className={style.journal}>
      <Title text="журнал" />
      <div className={style.left__wrap}>
        <div className={style.left}>
          <Header />
          {/* <Accordion /> */}
        </div>
      </div>
    </section>
  );
};
export default Journal;
