import Link from 'next/link';
import { FC } from 'react';

import basket from './../../../../../public/basket.svg';

import style from './basket.module.sass';

const Basket: FC = () => {
  return (
    <div className={style.basket__wrap}>
      <div className={style.basket}>
        <img src={basket.src} alt="" />
      </div>
      <div href="/basket" className={style.basket__text}>
        cумочка (<span className={style.count}>3</span>)
      </div>
    </div>
  );
};
export default Basket;
