import { Dispatch, FC, SetStateAction } from 'react';

import style from './../payCard/payCard.module.sass';

interface PayCardProps {
  activeEl: number;
  setActiveEl: Dispatch<SetStateAction<number>>;
  image: string;
  number: number;
}

const BasicPayCard: FC<PayCardProps> = ({ activeEl, setActiveEl, image, number }) => {
  const changeActiveEl = (number: number): void => {
    setActiveEl(number);
  };
  return (
    <div className={style.payMain} onClick={() => changeActiveEl(number)}>
      <div className={`${style.payItem} ${style.center} ${activeEl === number && style.active}`}>
        <div className={style.purpur}>Привязать новую карту</div>
        <div className={style.payImg}>
          <img alt="plus" className={style.plus} src={image} />
        </div>
      </div>
    </div>
  );
};

export default BasicPayCard;
