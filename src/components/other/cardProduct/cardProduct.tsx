import { FC } from 'react';
import Link from 'next/link';

import style from './cardProduct.module.sass';

const CardProduct: FC = () => {
  return (
    <Link href="/product/1" className={style.card}>
      <div className={style.img + ' img ' + style.img_one}></div>
      <h3 className={style.description}>Porebarrier Clear Pad очищающие пэды</h3>
      <div className={style.size}>20 мл</div>
      <div className={style.price}>
        2 234 ₽ <span className={style.price__old}>2 234 ₽</span>
      </div>
    </Link>
  );
};
export default CardProduct;
