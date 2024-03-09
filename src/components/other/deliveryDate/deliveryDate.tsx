import { FC } from 'react';
import Link from 'next/link';

import style from './deliveryDate.module.sass';

interface DeliveryDateProps {
  text: string;
}

const DeliveryDate: FC<DeliveryDateProps> = ({ text }) => {
  return (
    <div className={style.data}>
      <div className={style.grey}>Дата доставки</div>
      <div>{text}</div>
    </div>
  );
};

export default DeliveryDate;
