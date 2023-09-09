import { FC, useRef } from 'react';

import { CSSTransition } from 'react-transition-group';

import CircleArrow from '@/components/other/circleArrow/circleArrow';
import NewProductsSwiper from './newProducts/newProductsSwiper';

import closeSvg from './../../../../public/close.svg';
import basketSvg from './../../../../public/basket2.svg';

import style from './basket.module.sass';
import ProductsTable from './productsTable/productsTable';

interface BasketProps {
  basketOpen: boolean;
  setBasketOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Basket: FC<BasketProps> = ({ basketOpen, setBasketOpen }) => {
  const basketBlock = useRef(null);
  const arr = new Array(3);
  // const closeBasket = (e: React.MouseEvent<HTMLDivElement>) => {
  //   if (e.target !== basketBlock.current) {
  //     setBasketOpen(false);
  //   }
  // };
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
      <div>
        <div className={style.basket__wrap} /**onClick={closeBasket}*/>
          <div className={style.basket} ref={basketBlock}>
            <div className={style.padding}>
              <div className={style.close}>
                <img src={closeSvg.src} alt="" onClick={() => setBasketOpen(false)} />
              </div>
              <div className={style.bag}>
                <img src={basketSvg.src} alt="" />
                <div className={style.bag__text}>
                  Сумочка <span>(0)</span>
                </div>
              </div>
              {arr.length === 0 ? (
                <>
                  <p className={style.description}>
                    Похоже, ваша сумочка пуста. Давайте изменим это.
                  </p>
                  <div className={style.search}>
                    <span className={style.text}>поиск</span>
                    <div className={style.circle}>
                      <CircleArrow
                        sizeCircle="66px"
                        sizeImg="32px"
                        color="var(--grey-400)"
                        colorImg="var(--grey-900)"
                      />
                    </div>
                  </div>
                </>
              ) : (
                <ProductsTable />
              )}
            </div>
            {arr.length === 0 ? (
              <div className={style.products}>
                <div className={style.text}>новинки</div>
                <NewProductsSwiper />
              </div>
            ) : (
              ''
            )}
          </div>
        </div>
      </div>
    </CSSTransition>
  );
};
export default Basket;
