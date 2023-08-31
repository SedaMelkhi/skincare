import Link from 'next/link';
import { FC } from 'react';

import save from './../../../../../public/save.svg';

import style from './save.module.sass';

const Save: FC = () => {
  return (
    <Link href="/save" className={style.save}>
      <img src={save.src} alt="" />
    </Link>
  );
};
export default Save;
