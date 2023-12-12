import { FC, useState } from 'react';

import { IProduct, IScu } from '@/interfaces/products.interface';

import ArrowIcon from './../arrowIcon/arrowIcon';
import actionSvg1 from './../../../../../public/action1.svg';
import actionSvg2 from './../../../../../public/action2.svg';
import actionSvg3 from './../../../../../public/action3.svg';
import infoSvg from './../../../../../public/info.svg';
import saveSvg from './../../../../../public/save.svg';

import style from './text.module.sass';

const Text: FC<{ product: IProduct; scu: IScu[] | null }> = ({ product, scu }) => {
  const sizes: string[] = [];
  const prices: number[] = [];
  const icons = [actionSvg1.src, actionSvg2.src, actionSvg3.src];
  console.log(product);
  if (scu) {
    scu.forEach((item) => {
      !sizes.includes(item.value) && sizes.push(item.value);
      item.price && !prices.includes(+item.price) && prices.push(+item.price);
    });
  }
  const [activeSize, setActiveSize] = useState(sizes[0]);

  return (
    <div className={style.text}>
      <h2 className={style.title}>{product.name}</h2>
      <div className={style.actions}>
        {product.props &&
          product.props['44'] &&
          product.props['44'].value &&
          product.props['44'].value.map((name: String, i: number) => (
            <div className={style.action} key={i}>
              <img src={icons[i % 3]} alt="" className={style.svg} />
              <span>{name}</span>
            </div>
          ))}
      </div>

      <div
        className={style.description}
        dangerouslySetInnerHTML={{ __html: String(product.preDescription) }}></div>
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
      {/* <div className={style.oldPrice}>
        <div>2 234 ₽</div>
        <div>
          <img src={infoSvg.src} alt="" />
        </div>
      </div> */}
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
