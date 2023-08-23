import Link from 'next/link';
import { FC } from 'react';
import style from './save.module.sass';

const Save: FC = () => {
  return (
    <Link href="/save" className={style.save}>
      <img src="./save.svg" alt="" />
    </Link>
  );
};
export default Save;
