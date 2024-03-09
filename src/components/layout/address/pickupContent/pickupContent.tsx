import { FC } from 'react';

import style from './pickupContent.module.sass';

const PickupContent: FC = () => {
  return (
    <form className={style.form}>
      <div className={style.content}>
        <div className={style.address}>Грозный, Орзамиева 8, этаж 6, офис 7</div>
        <div className={style.time}>Часы работы:10:00 − 19:00</div>
        <div className={style.question}>Как добраться?</div>
        <div className={style.text}>Здание Rise</div>
      </div>
    </form>
  );
};

export default PickupContent;
