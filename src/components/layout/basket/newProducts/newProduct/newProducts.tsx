import { FC } from 'react';
import Link from 'next/link';

import style from './newProduct.module.sass';

const NewProduct: FC = () => {
  return (
    <Link href="/product/1" className={style.card}>
      <div className={style.img}></div>
      <h3 className={style.description}>Porebarrier Clear Pad очищающие пэды</h3>
    </Link>
  );
};
export default NewProduct;
