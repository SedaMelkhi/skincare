import { FC } from 'react';

import style from './basket.module.sass';

interface BasketProps {
  basketOpen: boolean;
  setBasketOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Basket: FC<BasketProps> = ({ basketOpen, setBasketOpen }) => {
  return (
    <div className={style.basket__wrap} style={{ display: basketOpen ? 'block' : 'none' }}>
      <div className={style.basket}></div>
    </div>
  );
};
export default Basket;
