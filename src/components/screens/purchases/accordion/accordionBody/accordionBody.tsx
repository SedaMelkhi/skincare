import { FC, LegacyRef } from 'react';

import ProductLine from '@/components/other/productLine/productLine';

import style from './accordionBody.module.sass';

interface AccordionBodyProps {
  bodyElement: LegacyRef<HTMLDivElement> | null;
  overflow: 'hidden' | 'visible';
  height: string;
}

const AccordionBody: FC<AccordionBodyProps> = ({ bodyElement, overflow, height }) => {
  return (
    <div
      className={style.text}
      ref={bodyElement && bodyElement}
      style={{
        height: overflow === 'hidden' ? height : 'auto',
        overflow: overflow,
      }}>
      <ProductLine />
      <div className={style.flex}>
        <div className={style.value}>Сумма заказа</div>
        <div className={style.line}></div>
        <div className={style.money}>5 000 ₽</div>
      </div>
      <div className={style.flex}>
        <div className={style.value}>Доставка</div>
        <div className={style.line}></div>
        <div className={style.money}>900 ₽</div>
      </div>
      <div className={style.result}>
        Итого <span>5900 ₽</span>
      </div>
    </div>
  );
};

export default AccordionBody;
