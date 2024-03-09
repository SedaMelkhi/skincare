import { FC } from 'react';
import closeSvg from './../../../../../public/close.svg';

import style from './asideHeader.module.sass';

interface IAsideHeader {
  title: string;
  closeAside: any;
}

const AsideHeader: FC<IAsideHeader> = ({ title, closeAside }) => {
  return (
    <div
      className={
        style.header + ' ' + (title.toLowerCase() === 'магазин skincare agents' ? style.small : '')
      }>
      <div className={style.bag}>
        <div className={style.bag__text}>{title}</div>
      </div>
      <div className={style.close}>
        <img src={closeSvg.src} alt="" onClick={closeAside} />
      </div>
    </div>
  );
};

export default AsideHeader;
