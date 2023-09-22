import { FC } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import 'swiper/css';

import style from './../hits.module.sass';
import CardProduct from '@/components/other/cardProduct/cardProduct';

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
      {[...new Array(6)].map((item, i) => (
        <SwiperSlide key={i}>
          <CardProduct available={true} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
export default HitsSwiper;
