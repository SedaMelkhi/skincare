import {FC} from 'react';
import style from './Reviews.module.sass';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import {Pagination} from 'swiper/modules';

const Reviews: FC = () => {
    const data = [
        {
            id: 0,
            title: "Шикарный результат",
            text: "Безумно благодарна Соне за спасение моего лица от акне и постакне! Шикарный специалист, мастер своего дела, тактичная, элегантная и приятная в общении доктор",
            sender: "Фатима",
        },
        {
            id: 1,
            title: "Шикарный результат",
            text: "Безумно благодарна Соне за спасение моего лица от акне и постакне! Шикарный специалист, мастер своего дела, тактичная, элегантная и приятная в общении доктор",
            sender: "Фатима",
        },
        {
            id: 2,
            title: "Шикарный результат",
            text: "Безумно благодарна Соне за спасение моего лица от акне и постакне! Шикарный специалист, мастер своего дела, тактичная, элегантная и приятная в общении доктор",
            sender: "Фатима",
        },
        {
            id: 3,
            title: "Шикарный результат",
            text: "Безумно благодарна Соне за спасение моего лица от акне и постакне! Шикарный специалист, мастер своего дела, тактичная, элегантная и приятная в общении доктор",
            sender: "Фатима",
        },
        {
            id: 4,
            title: "Шикарный результат",
            text: "Безумно благодарна Соне за спасение моего лица от акне и постакне! Шикарный специалист, мастер своего дела, тактичная, элегантная и приятная в общении доктор",
            sender: "Фатима",
        },
        {
            id: 5,
            title: "Шикарный результат",
            text: "Безумно благодарна Соне за спасение моего лица от акне и постакне! Шикарный специалист, мастер своего дела, тактичная, элегантная и приятная в общении доктор",
            sender: "Фатима",
        }
    ];

    return (
<div className={style.bg}>
            <div className="reviews">
                <div className={style.titleMain}>
                <h2 className={style.title}>Что о нас говорят</h2></div>

                <Swiper

                    spaceBetween={20}
                    centeredSlides={true}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    breakpoints={{
                        0:{
                            slidesPerView: 1,
                        },
                        768: {
                            slidesPerView: 2,

                        },
                        1200: {
                            slidesPerView:4.7,
                        }

                    }}
                >
                    {data.map((item) => (
                        <SwiperSlide key={item.id} className={style.slide}>
                            <div className={style.border}>
                                <h3 className={style.border__title}>{item.title}</h3>
                                <p className={style.border__text}>{item.text}</p>
                                <p className={style.sender}>@{item.sender}</p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
</div>

)
    ;
};

export default Reviews;








