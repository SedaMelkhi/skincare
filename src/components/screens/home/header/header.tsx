import { CSSProperties, FC } from 'react';

import Marquee from 'react-fast-marquee';

import { Pagination, Navigation, EffectFade, Autoplay, Parallax } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-fade';

import style from './header.module.sass';
import Link from 'next/link';

const Header: FC = () => {
  return (
    <div className={style.header__wrap}>
      <header className="wrap">
        <Swiper
          className={style.swiper}
          modules={[Pagination, Navigation, EffectFade, Autoplay, Parallax]}
          speed={900}
          parallax={true}
          // autoplay={{
          //   delay: 8000,
          // }}
          effect="fade"
          loop={true}
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
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
            enabled: true,
          }}>
          <SwiperSlide>
            <div className={style.header}>
              <div className={style.text__wrap}>
                <div className={style.text}>
                  <h1 className={style.title} data-swiper-parallax="-100%">
                    летняя коллекция
                  </h1>
                  <p className={style.description} data-swiper-parallax="-100%">
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
              <div className={style.mainImg__wrap}>
                <div className={style.mainImg} data-swiper-parallax="-100%"></div>
                <div className={style.text + ' ' + style.text_mobile}>
                  <h1 className={style.title} data-swiper-parallax="-100%">
                    летняя коллекция
                  </h1>
                  <p className={style.description} data-swiper-parallax="-100%">
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
              <div className={style.smallImg} data-swiper-parallax="-110%"></div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={style.header}>
              <div className={style.text__wrap}>
                <div className={style.text}>
                  <h1 className={style.title} data-swiper-parallax="-100%">
                    осенняя коллекция
                  </h1>
                  <p className={style.description} data-swiper-parallax="-100%">
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
              <div className={style.mainImg__wrap}>
                <div
                  className={style.mainImg}
                  data-swiper-parallax="-100%"
                  style={{ backgroundImage: 'url(./mainImg2.png)' }}></div>
                <div className={style.text + ' ' + style.text_mobile}>
                  <h1 className={style.title} data-swiper-parallax="-100%">
                    осенняя коллекция
                  </h1>
                  <p className={style.description} data-swiper-parallax="-100%">
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
              <div
                className={style.smallImg}
                data-swiper-parallax="-110%"
                style={{ backgroundImage: 'url(./smallImg2.png)' }}></div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={style.header}>
              <div className={style.text__wrap}>
                <div className={style.text}>
                  <h1 className={style.title} data-swiper-parallax="-100%">
                    зимняя коллекция
                  </h1>
                  <p className={style.description} data-swiper-parallax="-100%">
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
              <div className={style.mainImg__wrap}>
                <div
                  className={style.mainImg}
                  data-swiper-parallax="-100%"
                  style={{ backgroundImage: 'url(./mainImg3.png)' }}></div>
                <div className={style.text + ' ' + style.text_mobile}>
                  <h1 className={style.title} data-swiper-parallax="-100%">
                    летняя коллекция
                  </h1>
                  <p className={style.description} data-swiper-parallax="-100%">
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

              <div
                className={style.smallImg}
                data-swiper-parallax="-110%"
                style={{ backgroundImage: 'url(./smallImg3.jpg)' }}></div>
            </div>
          </SwiperSlide>
          <div className={style.swiperParams}>
            <div className={style.swiperPagination__wrap}>
              <div>
                <div className={'swiper-pagination ' + style.swiperPagination}></div>
              </div>
              <div className={style.arrows}>
                <img
                  src="./arrow.svg"
                  alt=""
                  className={'swiper-button-prev ' + style.arrow__left}
                />
                <img
                  src="./arrow.svg"
                  alt=""
                  className={'swiper-button-next ' + style.arrow__right}
                />
              </div>
            </div>
          </div>
        </Swiper>
      </header>
      <Marquee className={style.marquee__wrap} speed={100}>
        <div className={style.marquee}>
          <img src="./star.svg" alt="" />
          <Link href="">подбор ухода</Link>
          <img src="./star.svg" alt="" />
          <Link href="">разбор косметички</Link>
          <img src="./star.svg" alt="" />
          <Link href="">подбор ухода</Link>
          <img src="./star.svg" alt="" />
          <Link href="">разбор косметички</Link>
        </div>
      </Marquee>
    </div>
  );
};
export default Header;
