import Link from 'next/link';
import { FC } from 'react';

import style from './../products.module.sass';

import { IProduct } from '@/interfaces/products.interface';

const Product: FC<{ item: IProduct; classValue: string }> = ({ item, classValue }) => {
  const sizes: string[] = [];
  const prices: number[] = [];
  const scu = item.scu ? Object.values(item.scu) : null;
  if (scu) {
    scu.forEach((item) => {
      item[0] && !sizes.includes(item[0].value) && sizes.push(item[0].value);
      item[0] && item[0].price && !prices.includes(+item[0].price) && prices.push(+item[0].price);
    });
  }

  return (
    <Link href={'/product/' + item.id} className={style[classValue]} key={item.id}>
      <div
        className={style.image}
        style={
          item.smallPhoto
            ? { backgroundImage: `url(https://skincareagents.com/${item.smallPhoto})` }
            : {}
        }></div>
      <div className={style.name}>{item.name}</div>
      {sizes &&
        sizes.map((item, i) => (
          <span className={style.size} key={i}>
            {item}
            {sizes.length - 1 === i ? '' : ', '}
          </span>
        ))}
      <div className={style.price}>
        <div className={style.new}>
          {prices.length > 0 ? prices.reduce((x, y) => Math.min(x, y)) + ' ₽' : ''}
        </div>
        <div className={style.old}>2 234 ₽</div>
        {/* <div className={style.info}>
                <img src={infoSvg.src} alt="" />
              </div> */}
      </div>
    </Link>
  );
};
export default Product;
