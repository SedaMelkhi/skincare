import { FC } from 'react';
import Link from 'next/link';

import { Swiper, SwiperSlide } from 'swiper/react';

import Title from '@/components/other/title/title';
import Button from '@/components/other/button/button';

import 'swiper/css';
import style from './aboutUsExperts.module.sass';

const AboutUsExperts: FC = () => {
    return (
        <div className="experts">
            <section className={style.experts}>
                <div className="wrap">
                    <Title text="Как мы можем вам помочь" />
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
                                    <div className={style.hidden}>
                                        <h3 className={style.subtitle}>Бесплатно</h3>
                                        <div className={style.bottom}>
                                            <div className={style.circle}>
                                                <img src="./arrowCircle.svg" alt="" />
                                            </div>
                                            <div className={style.description}>Разбор косметички и подбор ухода</div>
                                        </div>
                                        <div className={style.number}>01</div>
                                    </div>
                                    <div className={style.flex}>
                                        <div className={style.left}>
                                            <div className={style.top}>
                                                <h3 className={style.title}>Разбор косметички и подбор ухода</h3>
                                                <div className={style.free}>Бесплатно</div>
                                            </div>
                                            <div className={style.desc}>
                                                Разбираем ваш нынешний уход, проводим разбор косметички, рассказываем, когда
                                                и что использовать, а что вовсе убрать из ухода
                                            </div>
                                            <div className={style.btn}>
                                                <Button text="Узнать подробнее" />
                                            </div>
                                        </div>
                                        <div className={style.right}></div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className={style.step + ' ' + style.step_violet}>
                                    <div className={style.hidden}>
                                        <h3 className={style.subtitle}>beauty pro</h3>
                                        <div className={style.bottom}>
                                            <div className={style.circle}>
                                                <img src="./arrowCircle.svg" alt="" />
                                            </div>
                                            <div className={style.description}>
                                                Консультация с косметологом-эстетистом
                                            </div>
                                        </div>
                                        <div className={style.number}>02</div>
                                    </div>
                                    <div className={style.flex}>
                                        <div className={style.left}>
                                            <div className={style.top}>
                                                <h3 className={style.title}>Разбор косметички и подбор ухода</h3>
                                                <div className={style.free}>Бесплатно</div>
                                            </div>
                                            <div className={style.desc}>
                                                Разбираем ваш нынешний уход, проводим разбор косметички, рассказываем, когда
                                                и что использовать, а что вовсе убрать из ухода
                                            </div>
                                            <div className={style.btn}>
                                                <Button text="Узнать подробнее" />
                                            </div>
                                        </div>
                                        <div className={style.right}></div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className={style.step + ' ' + style.step_grey}>
                                    <div className={style.hidden}>
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
                                    <div className={style.flex}>
                                        <div className={style.left}>
                                            <div className={style.top}>
                                                <h3 className={style.title}>Разбор косметички и подбор ухода</h3>
                                                <div className={style.free}>Бесплатно</div>
                                            </div>
                                            <div className={style.desc}>
                                                Разбираем ваш нынешний уход, проводим разбор косметички, рассказываем, когда
                                                и что использовать, а что вовсе убрать из ухода
                                            </div>
                                            <div className={style.btn}>
                                                <Button text="Узнать подробнее" />
                                            </div>
                                        </div>
                                        <div className={style.right}></div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </section>
        </div>
    );
};
export default AboutUsExperts;
