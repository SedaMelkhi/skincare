import { FC } from 'react';

import Arrows from '@/components/other/arrows/arrows';
import HitsSwiper from './hitsSwiper/hitsSwiper';

import style from './hits.module.sass';

const Hits: FC<any> = ({ hits }) => {
  return (
    <section className={style.hits__wrap}>
      <div className={style.hits}>
        <h2 className={style.title}>хиты</h2>
        <div className={style.products}>
          <HitsSwiper slidesPerView={3} hits={hits} />
        </div>
      </div>
      <div className={style.arrows}>
        <Arrows next="next" prev="prev" />
      </div>
    </section>
  );
};
export default Hits;
