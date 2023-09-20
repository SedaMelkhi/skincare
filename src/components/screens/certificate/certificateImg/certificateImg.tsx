import { FC } from 'react';
import Link from 'next/link';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';


import 'swiper/css/pagination';
import 'swiper/css';
import style from './certificateImg.module.sass';

const CertificateImg: FC = () => {
    return (
        <div className={style.bg}>
            <section className={style.present__wrap}>
                <div className={style.present}>

                    <div className={style.products__wrap}>
                        <div className={style.products}>
                            <Swiper
                                slidesPerView={1}
                                slidesPerGroup={4}
                                slideNextClass={style.nextSlide}
                                slidePrevClass={style.prevSlide}
                                slideActiveClass={style.activeSlide}
                                spaceBetween={12}
                                modules={[Navigation, Pagination]}
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
                                    400: {
                                        slidesPerView: 2,
                                        slidesPerGroup: 2,
                                    },

                                    0: {
                                        slidesPerView: 1.2,
                                        slidesPerGroup: 1,
                                        spaceBetween: 16,
                                    },
                                }}>
                                <SwiperSlide>
                                    <div className={style.card}>
                                        <div className={style.img + ' img ' + style.img_one}></div>

                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className={style.card}>
                                        <div className={style.img + ' img ' + style.img_two}></div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className={style.card}>
                                        <div className={style.img + ' img ' + style.img_three}></div>

                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className={style.card}>
                                        <div className={style.img + ' img ' + style.img_four}></div>

                                    </div>
                                </SwiperSlide>
                            </Swiper>
                        </div>
                    </div>
                    <div className={style.dots__wrap}>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
            </section>
        </div>
    );
};
export default CertificateImg;
