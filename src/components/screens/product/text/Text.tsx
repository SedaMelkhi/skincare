import { FC, useState } from 'react';

import { IProduct, IScu } from '@/interfaces/products.interface';

import ArrowIcon from './../arrowIcon/arrowIcon';
import actionSvg1 from './../../../../../public/action1.svg';
import actionSvg2 from './../../../../../public/action2.svg';
import actionSvg3 from './../../../../../public/action3.svg';
import infoSvg from './../../../../../public/info.svg';
import saveSvg from './../../../../../public/save.svg';

import style from './text.module.sass';

const Text: FC<{ data: IProduct }> = ({ data }) => {
  const sizes: string[] = [];
  const prices: number[] = [];
  const product = Object.values(data)[0];
  const scu: IScu[] | null = product.scu ? Object.values(product.scu) : null;
  if (scu) {
    scu.forEach((item) => {
      !sizes.includes(item.value) && sizes.push(item.value);
      item.price && !prices.includes(+item.price) && prices.push(+item.price);
    });
  }
  const [activeSize, setActiveSize] = useState(sizes[0]);
  console.log(product);

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
      <div className={style.description}>{product.preDescription}</div>
      <div className={style.subtitle}>Объеm</div>
      <div className={style.sizes}>
        {sizes.map((item, i) => (
          <div
            className={style.size + ' ' + (activeSize === item ? style.active : '')}
            key={i}
            onClick={() => setActiveSize(item)}>
            {item}
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
        {scu?.find((item) => item.value === activeSize)
          ? scu?.find((item) => item.value === activeSize)?.price + ' ₽'
          : 'цена не указана'}
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
