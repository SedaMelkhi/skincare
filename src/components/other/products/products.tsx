import Link from 'next/link';
import { FC } from 'react';

import Product from './product/product';

import { IProductArr } from '@/interfaces/products.interface';

import infoSvg from './../../../../public/info.svg';

import style from './products.module.sass';

const Products: FC<{ products: IProductArr }> = ({ products }) => {
  //const scu = products ? (products.scu ? Object.values(products.scu) : '') : '';
  return (
    <div className={style.products}>
      {products.map((item, i) =>
        i % 6 === 0 ? (
          <Product item={item} classValue="card_big" />
        ) : (
          <Product item={item} classValue="card" />
        ),
      )}
    </div>
  );
};

export default Products;
