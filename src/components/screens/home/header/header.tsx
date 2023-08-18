import { FC } from 'react';
import style from './header.module.sass';
import { Swiper, SwiperSlide } from 'swiper/react';
const Header: FC = () => {
  return (
    <div className="wrap">
      <header>
        <Swiper
          spaceBetween={50}
          slidesPerView={3}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}>
          <SwiperSlide>Slide 1</SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
          ...
        </Swiper>
      </header>
    </div>
  );
};
export default Header;
