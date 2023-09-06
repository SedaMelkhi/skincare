import { FC, useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Thumbs } from 'swiper/modules';

import image1 from './../../../../public/products/1.png';
import image2 from './../../../../public/products/2.png';
import image3 from './../../../../public/products/3.png';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

import style from './slider.module.sass';
import { Swiper as SwiperType } from 'swiper/types';

const Slider: FC = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);

  return (
    <div className={style.slider}>
      <Swiper
        style={{}}
        thumbs={thumbsSwiper ? { swiper: thumbsSwiper } : undefined}
        modules={[FreeMode, Thumbs]}
        className={style.swiper}>
        <SwiperSlide>
          <div className={style.image} style={{ backgroundImage: `url(${image1.src})` }}></div>
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
          <div className={style.image} style={{ backgroundImage: `url(${image1.src})` }}></div>
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
