import Link from 'next/link';
import { FC } from 'react';

import basket from './../../../../../public/basket.svg';

import style from './basket.module.sass';
import { useSelector } from 'react-redux';
import { IbasketData } from '@/interfaces/basket.interface';

interface IBasketState {
  basket: {
    basketArr: IbasketData[];
  };
}
const BasketBtn: FC = () => {
  const basketArr = useSelector((state: IBasketState) => state.basket.basketArr);

  return (
    <div className={style.basket__wrap}>
      <div className={style.basket}>
        <img src={basket.src} alt="" />
      </div>
      <div className={style.basket__text}>
        cумочка (<span className={style.count}>{basketArr.length}</span>)
      </div>
    </div>
  );
};
export default BasketBtn;
