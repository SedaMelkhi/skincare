import { FC } from 'react';

import { Pagination, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';

import 'swiper/css/navigation';

import style from './header.module.sass';
import Link from 'next/link';

const Header: FC = () => {
  return (
    <div className="wrap">
      <header>
        <Swiper
          className={style.swiper}
          pagination={{
            type: 'fraction',
            el: '.swiper-pagination',
            formatFractionCurrent: function (number) {
              return '0' + number;
            },
            formatFractionTotal: function (number) {
              return '0' + number;
            },
          }}
          navigation={true}
          modules={[Pagination, Navigation]}>
          <SwiperSlide>
            <div className={style.header}>
              <div className={style.text__wrap}>
                <div className={style.text}>
                  <h1 className={style.title}>летняя коллекция</h1>
                  <p className={style.description}>
                    Мы привезли много крутых новинок, давай скорее смотреть?
                  </p>
                  <div className={style.link__wrap}>
                    <Link href="/" className={style.link}>
                      смотреть
                    </Link>
                    <div className={style.circle}>
                      <img src="./arrowCircle.svg" alt="" />
                    </div>
                  </div>
                </div>
              </div>
              <div className={style.mainImg}></div>
              <div className={style.smallImg}></div>
            </div>
          </SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <div className={style.swiperPagination__wrap}>
            <div className={'swiper-pagination ' + style.swiperPagination}></div>
          </div>
        </Swiper>
      </header>
    </div>
  );
};
export default Header;
