import { FC } from 'react';

import image from './../../../../public/hits/1.png';

import style from './productLine.module.sass';

const ProductLine: FC = () => {
  return (
    <div className={style.products}>
      <div className={style.line}>
        <div className={style.left}>
          <div className={style.image} style={{ backgroundImage: `url(${image.src})` }}></div>
          <div className={style.text}>
            <div className={style.title}>SKIN&LAB Porebarrier Clear Pad очищающие пэды</div>
            <div className={style.details}>
              <div className={style.count}>1 шт</div>
              <div className={style.size}>100 мл</div>
            </div>
          </div>
        </div>
        <div className={style.price}> 2 400 ₽</div>
      </div>
      <div className={style.line}>
        <div className={style.left}>
          <div className={style.image} style={{ backgroundImage: `url(${image.src})` }}></div>
          <div className={style.text}>
            <div className={style.title}>SKIN&LAB Porebarrier Clear Pad очищающие пэды</div>
            <div className={style.details}>
              <div className={style.count}>1 шт</div>
              <div className={style.size}>100 мл</div>
            </div>
          </div>
        </div>
        <div className={style.price}> 2 400 ₽</div>
      </div>
      <div className={style.line}>
        <div className={style.left}>
          <div className={style.image} style={{ backgroundImage: `url(${image.src})` }}></div>
          <div className={style.text}>
            <div className={style.title}>SKIN&LAB Porebarrier Clear Pad очищающие пэды</div>
            <div className={style.details}>
              <div className={style.count}>1 шт</div>
              <div className={style.size}>100 мл</div>
            </div>
          </div>
        </div>
        <div className={style.price}> 2 400 ₽</div>
      </div>
      <div className={style.line}>
        <div className={style.left}>
          <div className={style.image} style={{ backgroundImage: `url(${image.src})` }}></div>
          <div className={style.text}>
            <div className={style.title}>SKIN&LAB Porebarrier Clear Pad очищающие пэды</div>
            <div className={style.details}>
              <div className={style.count}>1 шт</div>
              <div className={style.size}>100 мл</div>
            </div>
          </div>
        </div>
        <div className={style.price}> 2 400 ₽</div>
      </div>
      <div className={style.line}>
        <div className={style.left}>
          <div className={style.image} style={{ backgroundImage: `url(${image.src})` }}></div>
          <div className={style.text}>
            <div className={style.title}>SKIN&LAB Porebarrier Clear Pad очищающие пэды</div>
            <div className={style.details}>
              <div className={style.count}>1 шт</div>
              <div className={style.size}>100 мл</div>
            </div>
          </div>
        </div>
        <div className={style.price}> 2 400 ₽</div>
      </div>
      <div className={style.line}>
        <div className={style.left}>
          <div className={style.image} style={{ backgroundImage: `url(${image.src})` }}></div>
          <div className={style.text}>
            <div className={style.title}>SKIN&LAB Porebarrier Clear Pad очищающие пэды</div>
            <div className={style.details}>
              <div className={style.count}>1 шт</div>
              <div className={style.size}>100 мл</div>
            </div>
          </div>
        </div>
        <div className={style.price}> 2 400 ₽</div>
      </div>
    </div>
  );
};

export default ProductLine;
