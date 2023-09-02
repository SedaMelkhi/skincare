import { FC } from 'react';
import style from './Search.module.sass';

import searchImg from './../../../../../public/search.svg';
import arrowImg from './../../../../../public/arrow.svg';

const Search: FC = () => {
  return (
    <div className={style.search}>
      <input type="text" className={style.input} placeholder="Поиск" />
      <div className={style.search__img}>
        <img src={searchImg.src} alt="" />
      </div>
      <div className={style.arrow}>
        <img src={arrowImg.src} alt="" className={style.arrow__img} />
      </div>
    </div>
  );
};
export default Search;
