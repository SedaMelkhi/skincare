import {FC} from 'react';
import Link from 'next/link';

import {Swiper, SwiperSlide} from 'swiper/react';
import {Navigation, Pagination} from 'swiper/modules';


import 'swiper/css/pagination';
import 'swiper/css';
import style from './CertificateImg.module.sass';
import Title from "@/components/other/title/title";

const CertificateImg: FC = () => {
    return (
        <div className={style.bg}>
            <div className={style.present__wrap}>
                <div className={style.present}>
                    <div className={style.top}>
                        {/* Добавьте содержимое внутри блока .top, если необходимо */}
                    </div>
                    <div className={style.products__wrap}>
                        <div className={style.products}>
                            <div className={style.card}>
                                <Link href="/catalog">
                                    <div className={style.img + ' img ' + style.img_one}></div>
                                    <h3 className={style.subtitle}>Подарочный сертификат</h3>
                                    <div className={style.price}>2 234 ₽</div>
                                </Link>
                            </div>

                            <div className={style.card}>
                                <Link href="/catalog">
                                    <div className={style.img + ' img ' + style.img_two}></div>
                                    <h3 className={style.subtitle}>Подарочный сертификат</h3>
                                    <div className={style.price}>2 234 ₽</div>
                                </Link>
                            </div>

                            <div className={style.card}>
                                <Link href="/catalog">
                                    <div className={style.img + ' img ' + style.img_three}></div>
                                    <h3 className={style.subtitle}>Подарочный сертификат</h3>
                                    <div className={style.price}>2 234 ₽</div>
                                </Link>
                            </div>

                            <div className={style.card}>
                                <Link href="/catalog">
                                    <div className={style.img + ' img ' + style.img_four}></div>
                                    <h3 className={style.subtitle}>Подарочный сертификат</h3>
                                    <div className={style.price}>2 234 ₽</div>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className={style.btn__wrap}>
                        <Link href="/certificate" className={style.btn}>
                            Выбрать
                            <div className={style.circle}>
                <span>
                  <svg
                      width="60"
                      height="24"
                      viewBox="0 0 60 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M42.0988 4L50 12M42.0988 20L50 12M50 12H42.0988L10 12"
                        stroke="#19171A"
                        strokeWidth="2"
                    />
                  </svg>
                </span>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CertificateImg;
