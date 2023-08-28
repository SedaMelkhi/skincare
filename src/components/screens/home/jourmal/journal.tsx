import { FC } from 'react';

import style from './journal.module.sass';
import Title from '@/components/other/title/title';

const Journal: FC = () => {
  return (
    <div className="wrap">
      <section className={style.journal}>
        <Title text="журнал" />
        <div className={style.left}></div>
      </section>
    </div>
  );
};
export default Journal;
