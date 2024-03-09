import { FC } from 'react';
import Link from 'next/link';

import { Swiper, SwiperSlide } from 'swiper/react';

import Title from '@/components/other/title/title';
import Button from '@/components/other/button/button';
import { PromoBlockArray } from '@/interfaces/promoBlocks.interface';

import 'swiper/css';
import style from './experts.module.sass';

const Experts: FC<{ promoBlocks: PromoBlockArray }> = ({ promoBlocks }) => {
  const colors = [style.step_pink, style.step_violet, style.step_grey];
  const arr = promoBlocks.filter(({ mainText }) => mainText);
  console.log(promoBlocks);

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
              {arr.map(({ mainText, url, urlText }, i) => (
                <SwiperSlide key={i}>
                  <Link href={'/paidRecording'}>
                    <div className={style.step + ' ' + colors[i % 3]}>
                      <div className={style.hidden}>
                        <h3 className={style.subtitle}>{mainText}</h3>
                        <div className={style.bottom}>
                          <div className={style.circle}>
                            <img src="./arrowCircle.svg" alt="" />
                          </div>
                          <div className={style.description}>{urlText}</div>
                        </div>
                        <div className={style.number}>{i > 9 ? i : '0' + (i + 1)}</div>
                      </div>
                      <div className={style.flex}>
                        <div className={style.left}>
                          <div className={style.top}>
                            <h3 className={style.title}>{urlText}</h3>
                            <div className={style.free}>{mainText}</div>
                          </div>
                          <div className={style.desc}>
                            Разбираем ваш нынешний уход, проводим разбор косметички, рассказываем,
                            когда и что использовать, а что вовсе убрать из ухода
                          </div>
                          <div className={style.btn}>
                            <Button text="Узнать подробнее" link={url} />
                          </div>
                        </div>
                        <div className={style.right}></div>
                      </div>
                    </div>
                  </Link>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Experts;
