import { FC } from 'react';

import filtersSvg from './../../../../public/catalog/filters.svg';

import RangeSlider from '../rangeSlider/rangeSlider';
import { StyledEngineProvider } from '@mui/material';

import style from './filters.module.sass';

const Filters: FC = () => {
  return (
    <div className={style.filters + ' filters'}>
      <div className={style.wrap}>
        <span className={style.text}>фильтры</span>
        <img src={filtersSvg.src} alt="" />
      </div>
      <aside className={style.aside}>
        <div className={style.line}>
          <span>Cо скидкой</span>
          <label className={style.switch}>
            <input type="checkbox" className={style.input} />
            <span className={`${style.slider} ${style.round}`}></span>
          </label>
        </div>
        <div className={`${style.title} ${style.title_grey}`}>Цена</div>

        <StyledEngineProvider injectFirst>
          <RangeSlider />
        </StyledEngineProvider>
      </aside>
    </div>
  );
};

export default Filters;
