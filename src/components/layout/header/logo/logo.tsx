import Link from 'next/link';
import { FC } from 'react';
import style from './logo.module.sass';

const Logo: FC = () => {
  return (
    <div className={style.logo}>
      <div className={style.blur}></div>
      <Link href="/">
        <img src="./logo.svg" alt="" className={style.logo__img} />
      </Link>
    </div>
  );
};
export default Logo;
