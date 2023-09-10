import { FC, useState } from 'react';

import closeSvg from './../../../../../public/close.svg';
import saveSvg from './../../../../../public/save.svg';
import minusSvg from './../../../../../public/minus.svg';
import plusSvg from './../../../../../public/plus.svg';

import style from './productsTable.module.sass';

type Size = {
  size: string;
  active: boolean;
  id: number;
};

type ProductsTableProps = {
  title: string;
  sizes: Size[];
  price: number;
  count: number;
  id: number;
};

const ProductsTable: FC = () => {
  const [products, setProducts] = useState([
    {
      title: 'SKIN&LAB Porebarrier Clear Pad очищающие пэды',
      sizes: [
        {
          size: '100мл',
          active: true,
          sizeId: 10,
        },
        {
          size: '250мл',
          active: false,
          sizeId: 11,
        },
        {
          size: '350мл',
          active: false,
          sizeId: 12,
        },
      ],
      price: 2400,
      count: 1,
      id: 0,
    },
    {
      title: 'SKIN&LAB Porebarrier Clear Pad очищающие пэды',
      sizes: [
        {
          size: '100мл',
          active: true,
          sizeId: 20,
        },
        {
          size: '250мл',
          active: false,
          sizeId: 21,
        },
        {
          size: '350мл',
          active: false,
          sizeId: 22,
        },
      ],
      price: 2400,
      count: 1,
      id: 1,
    },
    {
      title: 'SKIN&LAB Porebarrier Clear Pad очищающие пэды',
      sizes: [
        {
          size: '100мл',
          active: true,
          sizeId: 30,
        },
        {
          size: '250мл',
          active: false,
          sizeId: 31,
        },
        {
          size: '350мл',
          active: false,
          sizeId: 32,
        },
      ],
      price: 2400,
      count: 1,
      id: 2,
    },
    {
      title: 'SKIN&LAB Porebarrier Clear Pad очищающие пэды',
      sizes: [
        {
          size: '100мл',
          active: true,
          sizeId: 40,
        },
        {
          size: '250мл',
          active: false,
          sizeId: 41,
        },
        {
          size: '350мл',
          active: false,
          sizeId: 42,
        },
      ],
      price: 2400,
      count: 1,
      id: 3,
    },
    {
      title: 'SKIN&LAB Porebarrier Clear Pad очищающие пэды',
      sizes: [
        {
          size: '100мл',
          active: true,
          sizeId: 50,
        },
        {
          size: '250мл',
          active: false,
          sizeId: 51,
        },
        {
          size: '350мл',
          active: false,
          sizeId: 52,
        },
      ],
      price: 2400,
      count: 1,
      id: 4,
    },
    {
      title: 'SKIN&LAB Porebarrier Clear Pad очищающие пэды',
      sizes: [
        {
          size: '100мл',
          active: true,
          sizeId: 60,
        },
        {
          size: '250мл',
          active: false,
          sizeId: 61,
        },
        {
          size: '350мл',
          active: false,
          sizeId: 62,
        },
      ],
      price: 2400,
      count: 1,
      id: 5,
    },
    {
      title: 'SKIN&LAB Porebarrier Clear Pad очищающие пэды',
      sizes: [
        {
          size: '100мл',
          active: true,
          sizeId: 70,
        },
        {
          size: '250мл',
          active: false,
          sizeId: 71,
        },
        {
          size: '350мл',
          active: false,
          sizeId: 72,
        },
      ],
      price: 2400,
      count: 1,
      id: 6,
    },
  ]);

  return (
    <div className={style.table}>
      {products.map(({ title, sizes, price, count, id }) => (
        <div className={style.row} key={id}>
          <div className={style.top}>
            <div>
              <div className={style.image}></div>
            </div>
            <div className={style.column}>
              <div className={style.flex}>
                <div>
                  <div className={style.title}>{title}</div>
                  <div className={style.sizes}>
                    {sizes.map(({ size, active, sizeId }, i) => (
                      <div
                        className={style.size + ' ' + (active ? style.active : '')}
                        key={i}
                        onClick={() =>
                          setProducts((products) =>
                            products.map((product) =>
                              product.id === id
                                ? {
                                    ...product,
                                    sizes: product.sizes.map((item) =>
                                      item.sizeId === sizeId
                                        ? { ...item, active: true }
                                        : { ...item, active: false },
                                    ),
                                  }
                                : product,
                            ),
                          )
                        }>
                        {size}
                      </div>
                    ))}
                  </div>
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
                <div className={style.counter}>
                  <div
                    className={style.minus}
                    onClick={() =>
                      count > 0 &&
                      setProducts((products) =>
                        products.map((item) =>
                          item.id === id ? { ...item, count: count - 1 } : item,
                        ),
                      )
                    }>
                    <img src={minusSvg.src} alt="" />
                  </div>
                  <span className={style.count}>{count}</span>
                  <div
                    className={style.plus}
                    onClick={() =>
                      setProducts((products) =>
                        products.map((item) =>
                          item.id === id ? { ...item, count: count + 1 } : item,
                        ),
                      )
                    }>
                    <img src={plusSvg.src} alt="" />
                  </div>
                </div>
                <div className={style.price}> 2 400 ₽</div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductsTable;
