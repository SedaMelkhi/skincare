import Link from 'next/link';
import { FC } from 'react';
import style from './catalog.module.sass';

const Catalog: FC = () => {
  return (
    <div className={style.catalog}>
      <div className={style.hamburger}>
        <img src="./hamburger.svg" alt="" />
      </div>
      <div className={style.catalog__text}>каталог</div>
    </div>
  );
};
export default Catalog;
