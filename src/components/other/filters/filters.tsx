import { FC } from 'react';

import filtersSvg from './../../../../public/catalog/filters.svg';

import style from './filters.module.sass';

const Filters: FC = () => {
  return (
    <div className={style.wrap}>
      <span className={style.text}>фильтры</span>
      <img src={filtersSvg.src} alt="" />
    </div>
  );
};

export default Filters;
