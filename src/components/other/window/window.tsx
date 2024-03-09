import { Dispatch, FC, PropsWithChildren, SetStateAction } from 'react';

import Button from '../button/button';

import circleSvg from './../../../../public/circleDots.svg';
import circleCheckSvg from './../../../../public/circleCheck.svg';

import style from './Window.module.sass';

interface WindowProps {
  title: string;
  price: number;
  status?: 'waiting' | 'paid';
  date?: string;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

const Window: FC<PropsWithChildren<WindowProps>> = ({
  children,
  title,
  price,
  status,
  date,
  setIsOpen,
}) => {
  return (
    <section className={style.window}>
      <div className={style.top} onClick={() => setIsOpen((prev) => !prev)}>
        <div className={style.start}>
          <div className={style.title}>{title}</div>
          {date && <div className={style.date}>Доставлено {date}</div>}
        </div>
        <div className={style.end + ' ' + (date && style.center)}>
          <div className={style.price}>{price} ₽</div>
          {status ? (
            <div className={style.status}>
              {status === 'waiting' ? (
                <div className={style.status}>
                  <div className={style.status__text}>Ждет оплаты</div>{' '}
                  <img src={circleSvg.src} alt="..." />
                </div>
              ) : (
                <div className={style.status}>
                  <div className={style.status__text}>Оплачено</div>
                  <img src={circleCheckSvg.src} alt="ok" />
                </div>
              )}
            </div>
          ) : (
            <div className={style.btn}>
              <Button text="повторить заказ" />
            </div>
          )}
        </div>
      </div>
      <div className={style.content}>{children}</div>
      {!status ? (
        <div className={style.btn__wrap}>
          <div className={style.btn_mobile}>
            <Button text="повторить заказ" />
          </div>
        </div>
      ) : (
        ''
      )}
    </section>
  );
};

export default Window;
