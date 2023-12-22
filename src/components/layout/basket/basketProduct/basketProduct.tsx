import { FC, useState } from 'react';
import Link from 'next/link';
import { IbasketData } from '@/interfaces/basket.interface';
import { getCartService, removeSCUToCartService } from '@/services/cart.service';
import { IScu } from '@/interfaces/products.interface';

import closeSvg from './../../../../../public/close.svg';
import saveSvg from './../../../../../public/save.svg';
import notphotoPng from './../../../../../public/notphoto.png';
import minusSvg from './../../../../../public/minus.svg';
import plusSvg from './../../../../../public/plus.svg';

import style from './basketProduct.module.sass';

const BasketProduct: FC<IbasketData> = ({
  name,
  quantity,
  finalPrice,
  scuId,
  parentItem,
  cartId,
  fullPrice,
  price,
  setBasketArr,
  setPricesObj,
}) => {
  const handleSizeClick = () => {
    // Логика обработки клика по размеру
  };
  const uniqueScuValue: string[] = Array.from(new Set(parentItem?.SCU.map(({ value }) => value)));

  const uniqueColors: any = {};
  const uniqueScuColor: IScu[] = parentItem?.SCU.filter(({ shade }) => {
    if (shade && !uniqueColors[shade.NAME]) {
      uniqueColors[shade.NAME] = true;
      return shade;
    }
    return false;
  });

  console.log(scuId, uniqueScuColor);

  const [activeScu, setActiveScu] = useState(
    parentItem?.SCU.filter(({ id, value }) => id === scuId),
  );
  const handleRemoveScuToCart = (cartId: number) => {
    const data = removeSCUToCartService.removeSCUToCart(cartId);
    data.then((res) => {
      if (res.status === 'ok') {
        if (localStorage.getItem('saleUserId')) {
          const data = getCartService.getCart(localStorage.getItem('saleUserId'));
          data.then((res) => {
            setPricesObj && setPricesObj(res.basket);
            setBasketArr && setBasketArr(Object.values(res.cartItems));
          });
        }
      }
    });
  };
  return (
    <div className={style.row} key={scuId}>
      <div className={style.top}>
        <Link href={`/product/${parentItem.ID}`} key={parentItem.ID}>
          <div
            className={style.image}
            style={{
              backgroundImage: `url(${
                parentItem.PREVIEW_PICTURE
                  ? 'https://skincareagents.com' + parentItem.PREVIEW_PICTURE
                  : notphotoPng.src
              })`,
            }}></div>
        </Link>
        <div className={style.column}>
          <div className={style.flex}>
            <div>
              <Link href={`/product/${parentItem.ID}`} key={parentItem.ID}>
                <div className={style.title}>{name}</div>
              </Link>
              <div className={style.colors}>
                {uniqueScuColor.map(
                  ({ shade, id }) =>
                    shade && (
                      <div className={style.color} key={shade.ID}>
                        <div className={style.color__name}>
                          <img src={'/Union.svg'} alt="" />
                          <span>{shade.NAME}</span>
                        </div>
                        <div
                          className={
                            style.color__border + ' ' + (scuId === id ? style.active : '')
                          }>
                          <div
                            className={style.color__image}
                            style={{
                              background: `url(https://skincareagents.com/${shade.PREVIEW_PICTURE})`,
                            }}></div>
                        </div>
                      </div>
                    ),
                )}
              </div>
              <div className={style.sizes}>
                {uniqueScuValue.map((value, i) => (
                  <div
                    className={
                      style.size + ' ' + (activeScu[0].value === value ? style.active : '')
                    }
                    key={i}
                    onClick={() => handleSizeClick()}>
                    {value}
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className={style.save}>
                <img src={saveSvg.src} alt="save" />
              </div>
              <div className={style.remove} onClick={() => handleRemoveScuToCart(cartId)}>
                <img src={closeSvg.src} alt="remove" />
              </div>
            </div>
          </div>
          <div className={style.bottom}>
            <div className={style.price}> {finalPrice} ₽</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BasketProduct;
