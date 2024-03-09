import { Dispatch, FC, SetStateAction } from 'react';

import visaSvg from './../../../../../public/certificate/visa.svg';
import violetCheckSvg from './../../../../../public/violetCheck.svg';

import style from './payCard.module.sass';

interface PayCardProps {
  activeEl: number;
  setActiveEl: Dispatch<SetStateAction<number>>;
}

const PayCard: FC<PayCardProps> = ({ activeEl, setActiveEl }) => {
  const changeActiveEl = (number: number): void => {
    setActiveEl(number);
  };
  return (
    <div className={style.payMain} onClick={() => changeActiveEl(0)}>
      <div className={style.payItem + ' ' + (activeEl === 0 ? style.active : '')}>
        <div className={style.flex + ' ' + style.purpur}>
          Основной способ
          <img alt="visa" className={style.check} src={violetCheckSvg.src} />
        </div>
        <div className={style.flex + ' ' + style.space_between}>
          <div className={style.number}>
            <div className={style.date}>05/24</div>
            4534 5345 **** **64
          </div>
          <div className={style.payImg}>
            <img alt="visa" className={style.visa} src={visaSvg.src} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PayCard;
