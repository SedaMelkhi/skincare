import { FC } from 'react';

import MenuBlock from '@/components/other/menuBlock/menuBlock';

import style from './infoBlock.module.sass';

interface InfoBlockProps {
  title: string;
  text: string;
}

const InfoBlock: FC<InfoBlockProps> = ({ title, text }) => {
  return (
    <div className={style.block}>
      <div className={style.top}>
        <div className={style.title}>{title}</div>
        <div className={style.menu}>
          <MenuBlock />
        </div>
      </div>
      <div className={style.address}>{text}</div>
    </div>
  );
};

export default InfoBlock;
