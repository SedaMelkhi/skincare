import { FC } from 'react';

import style from './journal.module.sass';
import Title from '@/components/other/title/title';
import Header from './header/header';

const Journal: FC = () => {
  return (
    <div className="wrap">
      <section className={style.journal}>
        <Title text="журнал" />
        <div className={style.left__wrap}>
          <div className={style.left}>
            <Header />
          </div>
        </div>
      </section>
    </div>
  );
};
export default Journal;
