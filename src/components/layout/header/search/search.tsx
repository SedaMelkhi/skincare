import { FC } from 'react';
import style from './Search.module.sass';

const Search: FC = () => {
  return (
    <div className={style.search}>
      <input type="text" className={style.input} placeholder="Поиск" />
      <div className={style.search__img}>
        <img src="./search.svg" alt="" />
      </div>
      <div className={style.arrow}>
        <img src="./arrow.svg" alt="" className={style.arrow__img} />
      </div>
    </div>
  );
};
export default Search;
