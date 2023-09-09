import { FC } from 'react';
import Link from 'next/link';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import 'swiper/css';
import Arrows from '@/components/other/arrows/arrows';

import style from './News.module.sass';

const News: FC = () => {
  return (
    <section>
      <div className={style.news}>
        <h2 className={style.title}>новинки</h2>
        <div className={style.products}>
          <Swiper
            slidesPerView={3}
            slidesPerGroup={3}
            slideNextClass={style.nextSlide}
            slidePrevClass={style.prevSlide}
            slideActiveClass={style.activeSlide}
            spaceBetween={57.5}
            modules={[Navigation]}
            navigation={{
              nextEl: '.next',
              prevEl: '.prev',
              enabled: true,
            }}
            breakpoints={{
              1200: {
                spaceBetween: 57.5,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 46,
              },
              550: {
                slidesPerView: 2,
                slidesPerGroup: 2,
              },
              0: {
                slidesPerView: 1.9,
                slidesPerGroup: 1,
                spaceBetween: 16,
              },
            }}>
            <SwiperSlide>
              <Link href="/product/1" className={style.card}>
                <div className={style.img + ' img ' + style.img_one}></div>
                <h3 className={style.subtitle}>SKIN&LAB</h3>
                <p className={style.description}>Porebarrier Clear Pad очищающие пэды</p>
                <div className={style.price}>2 234 ₽</div>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link href="/product/1" className={style.card}>
                <div className={style.img + ' img ' + style.img_two}></div>
                <h3 className={style.subtitle}>SKIN&LAB</h3>
                <p className={style.description}>Porebarrier Clear Pad очищающие пэды</p>
                <div className={style.price}>2 234 ₽</div>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link href="/product/1" className={style.card}>
                <div className={style.img + ' img ' + style.img_three}></div>
                <h3 className={style.subtitle}>SKIN&LAB</h3>
                <p className={style.description}>Porebarrier Clear Pad очищающие пэды</p>
                <div className={style.price}>2 234 ₽</div>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link href="/product/1" className={style.card}>
                <div className={style.img + ' img ' + style.img_two}></div>
                <h3 className={style.subtitle}>SKIN&LAB</h3>
                <p className={style.description}>Porebarrier Clear Pad очищающие пэды</p>
                <div className={style.price}>2 234 ₽</div>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link href="/product/1" className={style.card}>
                <div className={style.img + ' img ' + style.img_three}></div>
                <h3 className={style.subtitle}>SKIN&LAB</h3>
                <p className={style.description}>Porebarrier Clear Pad очищающие пэды</p>
                <div className={style.price}>2 234 ₽</div>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link href="/product/1" className={style.card}>
                <div className={style.img + ' img ' + style.img_one}></div>
                <h3 className={style.subtitle}>SKIN&LAB</h3>
                <p className={style.description}>Porebarrier Clear Pad очищающие пэды</p>
                <div className={style.price}>2 234 ₽</div>
              </Link>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <div className={style.arrows}>
        <Arrows next="next" prev="prev" />
      </div>
    </section>
  );
};
export default News;
