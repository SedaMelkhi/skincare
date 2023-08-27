import { FC } from 'react';
import Link from 'next/link';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import 'swiper/css';
import Arrows from '@/components/other/arrows/arrows';

import style from './hits.module.sass';

const Hits: FC = () => {
  return (
    <section className="wrap">
      <div className={style.hits}>
        <h2 className={style.title}>хиты</h2>
        <div className={style.products}>
          <Swiper
            slidesPerView={3}
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
                slidesPerView: 2,
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
        </div>
      </div>
      <div className={style.arrows}>
        <Arrows next="next" prev="prev" />
      </div>
    </section>
  );
};
export default Hits;
