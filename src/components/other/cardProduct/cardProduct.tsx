import { FC } from 'react';
import Link from 'next/link';

import img1 from './../../../../public/bonus/1.png';
import img2 from './../../../../public/bonus/new.png';
import img3 from './../../../../public/bonus/hit.svg';

import style from './cardProduct.module.sass';

interface CardProductProps {
  available: boolean;
}

const CardProduct: FC<CardProductProps> = ({ available }) => {
  return (
    <Link href="/product/1" className={style.card}>
      <div style={available ? {} : { opacity: '.5' }} className={style.padding}>
        <div className={style.bonus}>
          <img src={img1.src} alt="" />
          <img src={img2.src} alt="" />
          <img src={img3.src} alt="" />
        </div>
        <div className={style.img + ' img ' + style.img_one}></div>
        <h3 className={style.description}>Porebarrier Clear Pad очищающие пэды</h3>
        <div className={style.size}>20 мл</div>
      </div>

      {available ? (
        <div className={style.price}>
          2 234 ₽ <span className={style.price__old}>2 234 ₽</span>
        </div>
      ) : (
        <div className={style.text}>Нет в наличии</div>
      )}
    </Link>
  );
};
export default CardProduct;
