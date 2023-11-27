import { FC, useState } from 'react';

import ArrowIcon from './../arrowIcon/arrowIcon';
import actionSvg1 from './../../../../../public/action1.svg';
import actionSvg2 from './../../../../../public/action2.svg';
import actionSvg3 from './../../../../../public/action3.svg';
import infoSvg from './../../../../../public/info.svg';
import saveSvg from './../../../../../public/save.svg';

import style from './text.module.sass';
import { IProduct } from '@/interfaces/products.interface';

type Size = {
  size: string;
  id: number;
};

const Text: FC<{ data: IProduct }> = ({ data }) => {
  const [activeSize, setActiveSize] = useState(data.scu ? Object.values(data.scu)[0].id : 0);

  return (
    <div className={style.text}>
      <h2 className={style.title}>{data.name}</h2>
      <div className={style.actions}>
        <div className={style.action}>
          <img src={actionSvg1.src} alt="" className={style.svg} />
          <span>Oсвежает</span>
        </div>
        <div className={style.action}>
          <img src={actionSvg2.src} alt="" className={style.svg} />
          <span>Очищает</span>
        </div>
        <div className={style.action}>
          <img src={actionSvg3.src} alt="" className={style.svg} />
          <span>Питает</span>
        </div>
      </div>
      <div className={style.description}>
        Активно освежающий шампунь SOLU глубоко очищает волосы и кожу головы, удаляя остатки
        стайлинговых продуктов.
      </div>
      <div className={style.subtitle}>Объеm</div>
      <div className={style.sizes}>
        {data.scu &&
          Object.values(data.scu).map(({ id, value }) => (
            <div
              className={style.size + ' ' + (activeSize === id ? style.active : '')}
              key={id}
              onClick={() => setActiveSize(id)}>
              {value}
            </div>
          ))}
      </div>
      <div className={style.oldPrice}>
        <div>2 234 ₽</div>
        <div>
          <img src={infoSvg.src} alt="" />
        </div>
      </div>
      <div className={style.price}>
        {data.scu
          ? data.scu[activeSize] && data.scu[activeSize].price
            ? data.scu[activeSize].price + ' ₽'
            : 'цены нет'
          : ''}
      </div>
      <div className={style.btns}>
        <button className={style.btn}>Добавить в сумочку</button>
        <img src={saveSvg.src} alt="" />
      </div>

      <div className={style.select__wrap}>
        <div className={style.textGrey}>
          <span>Москва </span>
          <ArrowIcon />
        </div>
      </div>
      <div className={style.date}>В пункты выдачи 3 дня</div>
      <div className={style.more}>Подробнее о доставке</div>
    </div>
  );
};
export default Text;
