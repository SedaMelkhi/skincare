import Link from 'next/link';
import { FC } from 'react';
import { IProduct } from '@/interfaces/products.interface';

import discountImg from './../../../../../public/bonus/1.png';
import newImg from './../../../../../public/bonus/new.png';
import hitImg from './../../../../../public/bonus/hit.svg';

import style from './../products.module.sass';

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
  console.log(item);

  return (
    <Link href={'/product/' + item.id} className={style[classValue]} key={item.id}>
      {item.pin && (
        <div className={style.pin}>
          {item.pin.includes('Скидка') && <img src={discountImg.src} alt="" />}
          {item.pin.includes('Новинка') && <img src={newImg.src} alt="" />}
          {item.pin.includes('Хит') && <img src={hitImg.src} alt="" />}
        </div>
      )}

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
