import { FC } from 'react';
import style from './header.module.sass';
const Header: FC = () => {
  return (
    <div className="wrap">
      <header>
        <div className={style.image}></div>
      </header>
    </div>
  );
};
export default Header;
