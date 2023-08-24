import { FC } from 'react';
import style from './arrows.module.sass';

const Arrows: FC<{ next: string; prev: string }> = ({ next, prev }) => {
  return (
    <div className={style.arrows}>
      <img src="./arrow.svg" alt="" className={prev + ' ' + style.arrow__left} />
      <img src="./arrow.svg" alt="" className={next + ' ' + style.arrow__right} />
    </div>
  );
};
export default Arrows;
