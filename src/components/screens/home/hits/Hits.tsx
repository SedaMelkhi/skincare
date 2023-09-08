import { FC } from 'react';

import 'swiper/css';
import Arrows from '@/components/other/arrows/arrows';

import style from './hits.module.sass';
import HitsSwiper from './hitsSwiper/hitsSwiper';

const Hits: FC = () => {
  return (
    <section className={style.hits__wrap}>
      <div className={style.hits}>
        <h2 className={style.title}>хиты</h2>
        <div className={style.products}>
          {' '}
          <HitsSwiper slidesPerView={3} />
        </div>
      </div>
      <div className={style.arrows}>
        <Arrows next="next" prev="prev" />
      </div>
    </section>
  );
};
export default Hits;
