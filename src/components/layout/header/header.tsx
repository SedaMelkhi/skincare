import { FC, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Catalog from './catalog/catalog';
import Search from './search/search';
import Logo from './logo/logo';
import ProfileLogo from './profileLogo/profileLogo';
import Save from './save/save';
import Basket from './basket/basketBtn';
import { setIsBasketOpen, setIsNotifications } from '@/redux/basketSlice/basketSlice';
import DropDownMenu from './dropDownMenu/dropDownMenu';
import { setIsMenuOpen } from '@/redux/menuSlice/menuSlice';

import style from './header.module.sass';

interface RootState {
  basket: {
    isBasketOpen: boolean;
  };
}

const Header: FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scroll, setScroll] = useState('');
  const isBasketOpen = useSelector((state: RootState) => state.basket.isBasketOpen);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setIsMenuOpen(menuOpen));
    window.addEventListener('scroll', () => {
      if (window.pageYOffset > 10) {
        setScroll('scroll');
      } else {
        setScroll('');
      }
    });
  }, [menuOpen]);

  return (
    <div className={style.header__wrap + ' ' + style[scroll]}>
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
        <div className={style.menu}>
          {menuOpen && <DropDownMenu setMenuOpen={setMenuOpen} scroll={scroll} />}
        </div>
      </div>
    </div>
  );
};
export default Header;
