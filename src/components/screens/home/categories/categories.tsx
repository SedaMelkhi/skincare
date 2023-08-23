import { FC } from 'react';
import Link from 'next/link';

import { Pagination, Navigation, EffectFade, Autoplay, Parallax } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import style from './Categories.module.sass';

import 'swiper/css';

const Categories: FC = () => {
  return (
    <section className="wrap">
      <div className={style.categories + ' categories'}>
        <h2 className={style.title}>Категории</h2>
        <div className={style.products}>
          <Swiper
            slidesPerView={1.1}
            slideNextClass={style.nextSlide}
            slidePrevClass={style.prevSlide}
            slideActiveClass={style.activeSlide}
            spaceBetween={16}>
            <SwiperSlide>
              <Link href="/catalog" className={style.card}>
                <div className={style.img + ' img ' + style.img_one}></div>
                <h3 className={style.subtitle}>Лицо</h3>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link href="/catalog" className={style.card}>
                <div className={style.img + ' img ' + style.img_two}></div>
                <h3 className={style.subtitle}>Волосы</h3>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link href="/catalog" className={style.card}>
                <div className={style.img + ' img ' + style.img_three}></div>
                <h3 className={style.subtitle}>Тело </h3>
              </Link>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
};
export default Categories;
