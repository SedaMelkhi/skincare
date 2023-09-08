import { FC } from 'react';

import style from './basket.module.sass';

interface BasketProps {
  basketOpen: boolean;
  setBasketOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Basket: FC<BasketProps> = ({ basketOpen, setBasketOpen }) => {
  return (
    <div
      className={
        style.basket__wrap +
        ' ' +
        (basketOpen ? style.basket__wrap_show : style.basket__wrap_hidden)
      }>
      <div className={style.basket}>
        <span onClick={() => setBasketOpen(false)}>close</span>
      </div>
    </div>
  );
};
export default Basket;
