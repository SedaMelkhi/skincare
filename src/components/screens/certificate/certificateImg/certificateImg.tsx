import {FC, useState} from 'react';


import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';


import style from './CertificateImg.module.sass';
import {FreeMode, Navigation, Thumbs} from 'swiper/modules';

import image1 from "./../../../../../public/present/1.png"
import image2 from "./../../../../../public/present/3.png"
import image3 from "./../../../../../public/present/4.png"
import image4 from "./../../../../../public/present/2.png"
import image5 from "./../../../../../public/certificate/path-to-image-5.svg"
import image6 from "./../../../../../public/certificate/path-to-image-6.svg"
import image7 from "./../../../../../public/certificate/path-to-image-6.svg"
import image8 from "./../../../../../public/certificate/path-to-image-6.svg"
import {Swiper as SwiperType} from "swiper/types";

const CertificateImg: FC = () => {
    const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);
    const sliders = [{
        image: image1.src,

    },
        {
            image: image2.src,

        }, {
            image: image3.src,

        }, {
            image: image4.src,

        }, {
            image: image5.src,

        }, {
            image: image6.src,

        }, {
            image: image7.src,

        }, {
            image: image8.src,

        }]


    return (
        <div className={style.main}>

            <Swiper
                style={{}}
                pagination={true}
                spaceBetween={8}
                thumbs={thumbsSwiper ? {swiper: thumbsSwiper} : undefined}
                modules={[FreeMode, Navigation, Thumbs]}
                className={style.swiper}


            >
                {sliders.map(({image,}) => (
                    <SwiperSlide>
                        <div className={style.top}>
                            <div className={style.image} style={{backgroundImage: `url(${image})`}}></div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            <Swiper
                onSwiper={setThumbsSwiper}
                spaceBetween={8}
                slidesPerView={6}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className={style.swiper2}
            >

                {sliders.map(({image,}) => (
                    <SwiperSlide>
                        <div className={style.bottom}>
                            <div className={style.dot} style={{backgroundImage: `url(${image})`}}></div>
                        </div>
                    </SwiperSlide>
                ))}


            </Swiper>
        </div>
    );
};

export default CertificateImg;
