import {FC} from 'react';
import style from './ourAgents.module.sass';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import {Pagination} from 'swiper/modules';


const OurAgents: FC = () => {

    return (
        <div className="wrap">
            <div className={style.titleMain}>
                <div className={style.star}>
                    <div className={style.titleStar}></div>
                </div>
                <h2 className={style.title}>Доверьтесь нашим агентам</h2>
            </div>
            <div className={style.container}>
                <div className={style.agent}>
                    <h3 className={style.agent__name}>дудалова Аминат Адамовна

                    </h3>
                    <div className={style.agent__text}>Закончила астраханский государственный медицинский, ординатура по
                        специальности эндокринология, прошла профессиональную переподготовку по специальности
                        нутрициология,
                        выпускник школы Uniprof, студент preventage
                    </div>
                </div>
                <div className={style.agent}>
                    <h3 className={style.agent__name}>дидаева савдат Салмановна

                    </h3>
                    <div className={style.agent__text}>Дипломирования косметолог-эстетист, бьюти эксперт с опытом работы
                        пять лет, более 1000 проведённых пациентов с акне, куперощам и другими дерматитами.
                    </div>
                </div>
                <div className={style.slide}>
                    <div className={style.bg}>
                        <Swiper

                            spaceBetween={0}
                            centeredSlides={true}
                            pagination={{
                                clickable: true,
                            }}
                            modules={[Pagination]}
                            breakpoints={{
                                768: {
                                    slidesPerView: 2,
                                },
                                1200: {
                                    slidesPerView: 3,
                                },
                            }}
                        >


                            <SwiperSlide>
                                <div className={style.img1}></div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className={style.img2}></div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className={style.img3}></div>
                            </SwiperSlide>


                        </Swiper>
                    </div>
                </div>
            </div>
            <div className={style.circle}>

                <div className={style.circle__img}>
                </div>
            </div>
        </div>
    );
};

export default OurAgents;
