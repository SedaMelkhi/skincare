import { useState } from 'react';

import image1 from './../../../public/products/1.png';
import image2 from './../../../public/products/2.png';
import image3 from './../../../public/products/3.png';

import Layout from '@/components/layout/Layout';
import Breadcrumbs from '@/components/other/breadcrumbs/breadcrumbs';

import { NextPage } from 'next';
import { useRouter } from 'next/router';

import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Thumbs } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

import style from './product.module.sass';
import { Swiper as SwiperType } from 'swiper/types';

const Product: NextPage = () => {
  const { push } = useRouter();
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);

  return (
    <Layout title="Освежающий шампунь для глубокого увлажнения DAVINES Solu">
      <div className={`wrap ${style.wrap}`}>
        <Breadcrumbs
          arr={[
            { text: 'Каталог', link: '/catalog' },
            { text: 'Волосы', link: '/catalog/1' },
            { text: 'Шампунь', link: '/catalog/1' },
          ]}
        />
        <section className={style.product}>
          <div className={style.slider}>
            <Swiper
              style={{}}
              thumbs={thumbsSwiper ? { swiper: thumbsSwiper } : undefined}
              modules={[FreeMode, Thumbs]}
              className={style.swiper}>
              <SwiperSlide>
                <div
                  className={style.image}
                  style={{ backgroundImage: `url(${image1.src})` }}></div>
              </SwiperSlide>
              <SwiperSlide>
                <div
                  className={style.image}
                  style={{ backgroundImage: `url(${image2.src})` }}></div>
              </SwiperSlide>
              <SwiperSlide>
                <div
                  className={style.image}
                  style={{ backgroundImage: `url(${image3.src})` }}></div>
              </SwiperSlide>
            </Swiper>
            <Swiper
              onSwiper={setThumbsSwiper}
              slidesPerView={4}
              freeMode={true}
              watchSlidesProgress={true}
              modules={[FreeMode, Thumbs]}
              className={style.thumbs}>
              <SwiperSlide>
                <div
                  className={style.image}
                  style={{ backgroundImage: `url(${image1.src})` }}></div>
              </SwiperSlide>
              <SwiperSlide>
                <div
                  className={style.image}
                  style={{ backgroundImage: `url(${image2.src})` }}></div>
              </SwiperSlide>
              <SwiperSlide>
                <div
                  className={style.image}
                  style={{ backgroundImage: `url(${image3.src})` }}></div>
              </SwiperSlide>
            </Swiper>
          </div>
          <div className={style.text}>
            <h2 className={style.title}>
              Освежающий шампунь для глубокого увлажнения DAVINES Solu
            </h2>
          </div>
        </section>
      </div>
    </Layout>
  );
};
export default Product;
