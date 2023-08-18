import Link from 'next/link';
import { FC } from 'react';
import style from './save.module.sass';

const Save: FC = () => {
  return (
    <div className={style.save}>
      <img src="./save.svg" alt="" />
    </div>
  );
};
export default Save;
