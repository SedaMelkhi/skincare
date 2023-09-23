import { FC } from 'react';

import Button from '@/components/other/button/button';

import style from './certificateCard.module.sass';

const CertificateCard: FC = () => {
  return (
    <div>
      <div className={style.card}></div>
      <div className={style.price}>15 000 ₽</div>
      <div className={style.btn}>
        <Button text="Добавить к покупкам" fontSize="14px" height="44px" />
      </div>
      <div className={style.date}>Действует до 05.08.2024</div>
    </div>
  );
};

export default CertificateCard;
