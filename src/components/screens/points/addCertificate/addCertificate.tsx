import { FC } from 'react';

import Button from '@/components/other/button/button';

import presentSvg from './../../../../../public/present.svg';

import style from './addCertificate.module.sass';

const AddCertificate: FC = () => {
  return (
    <div className={style.flex}>
      <div>
        <img src={presentSvg.src} alt="" />
      </div>
      <div>
        <div className={style.desc}>
          Добавьте сертификат, чтобы воспользоваться им при оформлении заказа, либо перейдите к
          покупке нового сертификата.
        </div>
        <div className={style.btns}>
          <div className={style.btn}>
            <Button text="Добавить" height="43px" fontSize="14px" />
          </div>
          <div className={style.btn + ' ' + style.btn_white}>
            <Button text="подарить" height="43px" fontSize="14px" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddCertificate;
