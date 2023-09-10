import { FC } from 'react';

import { CSSTransition } from 'react-transition-group';

import CircleArrow from '@/components/other/circleArrow/circleArrow';
import NewProductsSwiper from './newProducts/newProductsSwiper';
import ProductsTable from './productsTable/productsTable';

import closeSvg from './../../../../public/close.svg';
import basketSvg from './../../../../public/basket2.svg';
import whiteArrowSvg from './../../../../public/whiteArrow.svg';

import style from './basket.module.sass';

interface BasketProps {
  basketOpen: boolean;
  setBasketOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Basket: FC<BasketProps> = ({ basketOpen, setBasketOpen }) => {
  const arr = new Array(3);
  const closeBasket = () => {
    setBasketOpen(false);
  };
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
        <div className={style.basket__wrap}>
          <div className={style.empty} onClick={closeBasket}></div>
          <div className={style.basket}>
            <div className={style.padding}>
              <div className={style.header}>
                <div className={style.close}>
                  <img src={closeSvg.src} alt="" onClick={closeBasket} />
                </div>
                <div className={style.bag}>
                  <img src={basketSvg.src} alt="" />
                  <div className={style.bag__text}>
                    Сумочка <span>(0)</span>
                  </div>
                </div>
              </div>
              <div className={style.content}>
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
                  <>
                    <ProductsTable />
                  </>
                )}
              </div>
            </div>
            {arr.length === 0 ? (
              <div className={style.products}>
                <div className={style.text}>новинки</div>
                <NewProductsSwiper />
              </div>
            ) : (
              <div className={style.footer}>
                <div className={style.table}>
                  <div className={style.table__row}>
                    <div>Товаров на сумму</div>
                    <div className={style.price + ' ' + style.old_price}>12 400 ₽</div>
                  </div>
                  <div className={style.table__row}>
                    <div className={style.discount}>Скидка</div>
                    <div className={style.price + ' ' + style.discount}>-2 000 ₽</div>
                  </div>
                  <div className={style.table__row}>
                    <div>Итого</div>
                    <div className={style.price + ' ' + style.allPrice}>10 400 ₽</div>
                  </div>
                </div>
                <div className={style.promocode}>
                  Применить промокод, сертификат или баллы можно при оформлении заказа.
                </div>
                <button className={style.btn}>
                  оформить заказ <img src={whiteArrowSvg.src} alt="->" />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </CSSTransition>
  );
};
export default Basket;
