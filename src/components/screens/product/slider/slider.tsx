import { FC, useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Thumbs, Pagination } from 'swiper/modules';
import { Swiper as SwiperType } from 'swiper/types';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import 'swiper/css/pagination';

import style from './slider.module.sass';

const Slider: FC<{ detailPhoto?: string[] }> = ({ detailPhoto }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);
  console.log(detailPhoto);

  return (
    <div className={style.slider + ' productSlider'}>
      {detailPhoto && detailPhoto.length > 0 ? (
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
          {detailPhoto.map((url) => (
            <SwiperSlide>
              <div
                className={style.image}
                style={{ backgroundImage: `url(https://skincareagents.com${url})` }}></div>
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <div className={style.image__not}></div>
      )}
      {detailPhoto && detailPhoto.length > 0 ? (
        <Swiper
          onSwiper={setThumbsSwiper}
          slidesPerView={4}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Thumbs]}
          className={style.thumbs}>
          {detailPhoto.map((url) => (
            <SwiperSlide>
              <div
                className={style.image}
                style={{ backgroundImage: `url(https://skincareagents.com${url})` }}></div>
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <div className={style.image__not + ' ' + style.image__not_mobile}></div>
      )}
    </div>
  );
};

export default Slider;
