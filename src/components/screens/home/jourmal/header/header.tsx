import { FC } from 'react';

import style from './header.module.sass';

const Header: FC = () => {
  return (
    <div className={style.header}>
      <div className={style.image}></div>
      <div className={style.header__text}>
        <h3 className={style.title}>
          Как составить уход?
          <div className={style.circle}>
            <img src="./arrowCircle.svg" alt="" />
          </div>
        </h3>
        <div className={style.subtitle}>Проблемная кожа</div>
        <div className={style.description}>
          О красивой коже мечтает каждый. Мы готовы на все, лишь бы достичь идеала. Но достаточно
          несколько простых шагов
        </div>
      </div>
    </div>
  );
};
export default Header;
