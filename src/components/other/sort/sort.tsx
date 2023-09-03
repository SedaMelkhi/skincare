import { FC } from 'react';

import sortSvg from './../../../../public/catalog/sort.svg';

import style from './sort.module.sass';

const Sort: FC = () => {
  return (
    <div className={style.wrap}>
      <span className={style.text}>По популярности</span>
      <img src={sortSvg.src} alt="" className={style.img} />
    </div>
  );
};

export default Sort;
