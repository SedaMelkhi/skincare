import { FC } from 'react';

import { CSSTransition } from 'react-transition-group';

import style from './basket.module.sass';

interface BasketProps {
  basketOpen: boolean;
  setBasketOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Basket: FC<BasketProps> = ({ basketOpen, setBasketOpen }) => {
  return (
    <CSSTransition
      in={basketOpen}
      timeout={700}
      classNames={{
        enter: style.slideEnter,
        enterActive: style.slideEnterActive,
        exit: style.slideExit,
        exitActive: style.slideExitActive,
      }}
      unmountOnExit>
      <div className={style.basket__wrap}>
        <div className={style.basket}>
          <span onClick={() => setBasketOpen(false)}>close</span>
        </div>
      </div>
    </CSSTransition>
  );
};
export default Basket;
