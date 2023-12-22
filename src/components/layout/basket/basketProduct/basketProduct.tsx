import { FC, useState } from 'react';

import { IbasketData } from '@/interfaces/basket.interface';

import closeSvg from './../../../../../public/close.svg';
import saveSvg from './../../../../../public/save.svg';
import notphotoPng from './../../../../../public/notphoto.png';
import minusSvg from './../../../../../public/minus.svg';
import plusSvg from './../../../../../public/plus.svg';

import style from './basketProduct.module.sass';
import Link from 'next/link';

const BasketProduct: FC<IbasketData> = ({
  name,
  quantity,
  finalPrice,
  scuId,
  parentItem,
  cartId,
  fullPrice,
  price,
}) => {
  const handleSizeClick = () => {
    // Логика обработки клика по размеру
  };
  const uniqueScuValue: string[] = Array.from(new Set(parentItem?.SCU.map(({ value }) => value)));
  const uniqueScuColor: any = Array.from(new Set(parentItem?.SCU.map(({ shade }) => shade)));

  const [activeScu, setActiveScu] = useState(
    parentItem?.SCU.filter(({ id, value }) => id === scuId),
  );

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
            <div className={style.colors}>
              {/* {colors.map(({ name, image, id }) => (
                <div className={style.color} key={id} onClick={() => setActiveColor(id)}>
                    <div className={style.color__name}>
                    <img src={'/Union.svg'} alt="" />
                    <span>{name}</span>
                    </div>
                    <div className={style.color__border + ' ' + (activeColor === id ? style.active : '')}>
                    <div
                        className={style.color__image}
                        style={{ background: `url(https://skincareagents.com/${image})` }}></div>
                    </div>
                </div>
            ))} */}
            </div>
            <div>
              <div className={style.save}>
                <img src={saveSvg.src} alt="save" />
              </div>
              <div className={style.close}>
                <img src={closeSvg.src} alt="close" />
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
