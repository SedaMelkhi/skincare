import { FC, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Catalog from './catalog/catalog';
import Search from './search/search';
import Logo from './logo/logo';
import ProfileLogo from './profileLogo/profileLogo';
import Save from './save/save';
import Basket from './basket/basketBtn';
import { setIsBasketOpen, setIsNotifications } from '@/redux/basketSlice/basketSlice';
import DropDownMenu from './dropDownMenu/dropDownMenu';

import style from './header.module.sass';

interface RootState {
  basket: {
    isBasketOpen: boolean;
  };
}

const Header: FC<any> = ({ catalog }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const isBasketOpen = useSelector((state: RootState) => state.basket.isBasketOpen);
  const dispatch = useDispatch();
  return (
    <div className={style.header__wrap}>
      <div className="wrap">
        <header className={style.header}>
          <nav className={style.group + ' ' + style.nav}>
            <Catalog menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
            <Search />
          </nav>
          <div className={style.logo}>
            <Logo />
          </div>
          <div className={style.group + ' ' + style.group_right}>
            <ProfileLogo />
            <Save />
            <div
              onClick={() => {
                dispatch(setIsBasketOpen(!isBasketOpen));
                dispatch(setIsNotifications(false));
              }}>
              <Basket />
            </div>
          </div>
        </header>
        <div className={style.menu}>{menuOpen && <DropDownMenu setMenuOpen={setMenuOpen} />}</div>
      </div>
    </div>
  );
};
export default Header;
