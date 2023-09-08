import { FC } from 'react';
import Link from 'next/link';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import 'swiper/css';

import style from './../hits.module.sass';

type HitsSwiperProps = {
  slidesPerView: number;
};

const HitsSwiper: FC<HitsSwiperProps> = ({ slidesPerView }) => {
  return (
    <Swiper
      slidesPerView={slidesPerView}
      slidesPerGroup={3}
      slideNextClass={style.nextSlide}
      slidePrevClass={style.prevSlide}
      slideActiveClass={style.activeSlide}
      spaceBetween={20}
      modules={[Navigation]}
      navigation={{
        nextEl: '.next',
        prevEl: '.prev',
        enabled: true,
      }}
      breakpoints={{
        1200: {
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 16,
        },
        550: {
          slidesPerView: 2.3,
          slidesPerGroup: 2,
        },
        0: {
          slidesPerView: 1.6,
          slidesPerGroup: 1,
          spaceBetween: 16,
        },
      }}>
      <SwiperSlide>
        <Link href="/catalog" className={style.card}>
          <div className={style.img + ' img ' + style.img_one}></div>
          <h3 className={style.description}>Porebarrier Clear Pad очищающие пэды</h3>
          <div className={style.size}>20 мл</div>
          <div className={style.price}>
            2 234 ₽ <span className={style.price__old}>2 234 ₽</span>
          </div>
        </Link>
      </SwiperSlide>
      <SwiperSlide>
        <Link href="/catalog" className={style.card}>
          <div className={style.img + ' img ' + style.img_two}></div>
          <h3 className={style.description}>Porebarrier Clear Pad очищающие пэды</h3>
          <div className={style.size}>20 мл</div>
          <div className={style.price}>
            2 234 ₽ <span className={style.price__old}>2 234 ₽</span>
          </div>
        </Link>
      </SwiperSlide>
      <SwiperSlide>
        <Link href="/catalog" className={style.card}>
          <div className={style.img + ' img ' + style.img_three}></div>
          <h3 className={style.description}>Porebarrier Clear Pad очищающие пэды</h3>
          <div className={style.size}>20 мл</div>
          <div className={style.price}>
            2 234 ₽ <span className={style.price__old}>2 234 ₽</span>
          </div>
        </Link>
      </SwiperSlide>
      <SwiperSlide>
        <Link href="/catalog" className={style.card}>
          <div className={style.img + ' img ' + style.img_two}></div>
          <h3 className={style.description}>Porebarrier Clear Pad очищающие пэды</h3>
          <div className={style.size}>20 мл</div>
          <div className={style.price}>
            2 234 ₽ <span className={style.price__old}>2 234 ₽</span>
          </div>
        </Link>
      </SwiperSlide>
      <SwiperSlide>
        <Link href="/catalog" className={style.card}>
          <div className={style.img + ' img ' + style.img_three}></div>
          <h3 className={style.description}>Porebarrier Clear Pad очищающие пэды</h3>
          <div className={style.size}>20 мл</div>
          <div className={style.price}>
            2 234 ₽ <span className={style.price__old}>2 234 ₽</span>
          </div>
        </Link>
      </SwiperSlide>
      <SwiperSlide>
        <Link href="/catalog" className={style.card}>
          <div className={style.img + ' img ' + style.img_one}></div>
          <h3 className={style.description}>Porebarrier Clear Pad очищающие пэды</h3>
          <div className={style.size}>20 мл</div>
          <div className={style.price}>
            2 234 ₽ <span className={style.price__old}>2 234 ₽</span>
          </div>
        </Link>
      </SwiperSlide>
    </Swiper>
  );
};
export default HitsSwiper;
