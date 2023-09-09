import { FC } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import NewProduct from './newProduct/newProducts';

import 'swiper/css';

import style from './newProductsSwiper.module.sass';

const NewProductsSwiper: FC = () => {
  return (
    <div className={style.products}>
      {' '}
      <Swiper
        slidesPerView={3}
        slidesPerGroup={3}
        slideNextClass={style.nextSlide}
        slidePrevClass={style.prevSlide}
        slideActiveClass={style.activeSlide}
        spaceBetween={16}
        modules={[Navigation]}
        navigation={{
          nextEl: '.next',
          prevEl: '.prev',
          enabled: true,
        }}
        breakpoints={{
          1200: {
            spaceBetween: 16,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 16,
          },
          550: {
            slidesPerView: 2,
            slidesPerGroup: 2,
          },
          0: {
            slidesPerView: 2,
            slidesPerGroup: 1,
            spaceBetween: 16,
          },
        }}>
        {[...new Array(6)].map((item, i) => (
          <SwiperSlide key={i}>
            <NewProduct />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
export default NewProductsSwiper;
