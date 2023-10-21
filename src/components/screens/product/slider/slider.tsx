import { FC, useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Thumbs, Pagination } from 'swiper/modules';
import { Swiper as SwiperType } from 'swiper/types';

import image1 from './../../../../../public/products/1.png';
import image2 from './../../../../../public/products/2.png';
import image3 from './../../../../../public/products/3.png';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import 'swiper/css/pagination';

import style from './slider.module.sass';

const Slider: FC<{ detailPhoto?: string }> = ({ detailPhoto }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);

  return (
    <div className={style.slider + ' productSlider'}>
      <Swiper
        style={{}}
        pagination={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Thumbs, Pagination]}
        className={style.swiper}
        breakpoints={{
          768: {
            pagination: false,
          },
        }}>
        <SwiperSlide>
          <div
            className={style.image}
            style={{ backgroundImage: `url(http://fkmva.beget.tech/${detailPhoto})` }}></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={style.image} style={{ backgroundImage: `url(${image2.src})` }}></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={style.image} style={{ backgroundImage: `url(${image3.src})` }}></div>
        </SwiperSlide>
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Thumbs]}
        className={style.thumbs}>
        <SwiperSlide>
          <div
            className={style.image}
            style={{ backgroundImage: `url(http://fkmva.beget.tech/${detailPhoto})` }}></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={style.image} style={{ backgroundImage: `url(${image2.src})` }}></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={style.image} style={{ backgroundImage: `url(${image3.src})` }}></div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
