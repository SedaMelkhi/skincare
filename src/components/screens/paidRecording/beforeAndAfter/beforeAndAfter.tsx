import {FC} from 'react';
import style from './BeforeAndAfter.module.sass';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import {Pagination} from 'swiper/modules';

const BeforeAndAfter: FC = () => {

    return (
        <div className="wrap berofeAndAfter">

            <h2 className={style.title}>ваша кожа</h2>

            <Swiper
                className={style.swiper}


                centeredSlides={false}
                slidesPerGroup={1}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                breakpoints={{
                    0: {
                        slidesPerView: 1.1,
                        spaceBetween: 10

                    },
                    768: {
                        slidesPerView: 1,
                        spaceBetween: 40

                    },
                    1200: {
                        slidesPerView: 1.1,
                        spaceBetween: 104
                    }

                }}
            >

                <SwiperSlide className={style.slide}>
                    <div className={style.container}>
                        <div className={style.before}>
                            <div className={style.before__img1}></div>
                            <div className={style.before__text}>до советов агентов:(</div>
                        </div>
                        <div className={style.after}>
                            <div className={style.after__img1}></div>
                            <div className={style.after__textMain}><img src="./paidRecording/star.png"
                                                                        className={style.after__star}/>
                                <div className={style.after__text}>и после</div>
                                <img src="./paidRecording/star.png" className={style.after__star}/></div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className={style.slide}>
                    <div className={style.container}>
                        <div className={style.before}>
                            <div className={style.before__img2}></div>
                            <div className={style.before__text}>до советов агентов:(</div>
                        </div>
                        <div className={style.after}>
                            <div className={style.after__img2}></div>
                            <div className={style.after__textMain}><img src="./paidRecording/star.png"
                                                                        className={style.after__star}/>
                                <div className={style.after__text}>и после</div>
                                <img src="./paidRecording/star.png" className={style.after__star}/></div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className={style.slide}>
                    <div className={style.container}>
                        <div className={style.before}>
                            <div className={style.before__img3}></div>
                            <div className={style.before__text}>до советов агентов:(</div>
                        </div>
                        <div className={style.after}>
                            <div className={style.after__img3}></div>
                            <div className={style.after__textMain}><img src="./paidRecording/star.png"
                                                                        className={style.after__star}/>
                                <div className={style.after__text}>и после</div>
                                <img src="./paidRecording/star.png" className={style.after__star}/></div>
                        </div>
                    </div>
                </SwiperSlide>

            </Swiper>
        </div>


    )
        ;
};

export default BeforeAndAfter;








