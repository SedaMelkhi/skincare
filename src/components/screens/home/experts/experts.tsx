import { FC } from 'react';
import Link from 'next/link';

import { Swiper, SwiperSlide } from 'swiper/react';

import Title from '@/components/other/title/title';

import 'swiper/css';
import style from './experts.module.sass';

const Experts: FC = () => {
  return (
    <div className="experts">
      <section className={style.experts}>
        <div className="wrap">
          <Title text="мы эксперты в уходе за кожей" />
        </div>

        <div className={style.steps__wrap}>
          <div className={style.steps}>
            <Swiper
              slidesPerView={3}
              slidesPerGroup={1}
              spaceBetween={16}
              direction="vertical"
              breakpoints={{
                1200: {
                  direction: 'vertical',
                },
                768: {
                  direction: 'vertical',
                },
                767: {
                  direction: 'horizontal',
                  slidesPerView: 1.1,
                },
                0: {
                  direction: 'horizontal',
                  slidesPerView: 1.1,
                },
              }}>
              <SwiperSlide>
                <div className={style.step + ' ' + style.step_pink}>
                  <h3 className={style.subtitle}>Бесплатно</h3>
                  <div className={style.bottom}>
                    <div className={style.circle}>
                      <img src="./arrowCircle.svg" alt="" />
                    </div>
                    <div className={style.description}>Разбор косметички и подбор ухода</div>
                  </div>
                  <div className={style.number}>01</div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={style.step + ' ' + style.step_violet}>
                  <h3 className={style.subtitle}>beauty pro</h3>
                  <div className={style.bottom}>
                    <div className={style.circle}>
                      <img src="./arrowCircle.svg" alt="" />
                    </div>
                    <div className={style.description}>Консультация с косметологом-эстетистом</div>
                  </div>
                  <div className={style.number}>02</div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={style.step + ' ' + style.step_grey}>
                  <h3 className={style.subtitle}>beauty pro</h3>
                  <div className={style.bottom}>
                    <div className={style.circle}>
                      <img src="./arrowCircle.svg" alt="" />
                    </div>
                    <div className={style.description}>
                      Консультация с эндокринологом и косметологом
                    </div>
                  </div>
                  <div className={style.number}>03</div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Experts;
