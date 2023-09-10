import Link from 'next/link';
import { FC } from 'react';

import basket from './../../../../../public/basket.svg';

import style from './basket.module.sass';

const BasketBtn: FC = () => {
  return (
    <div className={style.basket__wrap}>
      <div className={style.basket}>
        <img src={basket.src} alt="" />
      </div>
      <div className={style.basket__text}>
        cумочка (<span className={style.count}>7</span>)
      </div>
    </div>
  );
};
export default BasketBtn;
