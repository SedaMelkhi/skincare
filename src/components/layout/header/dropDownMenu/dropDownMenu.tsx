import Link from 'next/link';

import { Dispatch, FC, SetStateAction, useEffect, useState } from 'react';

import arrow from './../../../../../public/arr.svg';

import style from './dropDownMenu.module.sass';
import { useSelector } from 'react-redux';

interface CatalogItem {
  ID: string;
  NAME: string;
  DESCRIPTION: string;
  DEPTH_LEVEL: string;
  IBLOCK_SECTION_ID: string | null;
  SUBCATEGORIES?: CatalogItem[];
}

type CatalogItems = CatalogItem[];

type CatalogMenu = {
  menu: {
    menu: CatalogItems;
  };
};

interface IMenuOpen {
  setMenuOpen: Dispatch<SetStateAction<boolean>>;
}

const DropDownMenu: FC<IMenuOpen> = ({ setMenuOpen }) => {
  const [items, setItems] = useState<CatalogItems>([]);
  const catalog = useSelector((state: CatalogMenu) => state.menu.menu);
  useEffect(() => {
    let arr: CatalogItems = [];
    catalog.forEach(({ ID, NAME, DESCRIPTION, DEPTH_LEVEL, IBLOCK_SECTION_ID }) => {
      if (DEPTH_LEVEL === '1') {
        arr.push({ ID, NAME, DESCRIPTION, DEPTH_LEVEL, IBLOCK_SECTION_ID, SUBCATEGORIES: [] });
      }
    });
    catalog.forEach(({ ID, NAME, DESCRIPTION, DEPTH_LEVEL, IBLOCK_SECTION_ID }) => {
      if (DEPTH_LEVEL === '2') {
        arr.forEach((item) => {
          if (item.ID === IBLOCK_SECTION_ID) {
            item.SUBCATEGORIES &&
              item.SUBCATEGORIES.push({
                ID,
                NAME,
                DESCRIPTION,
                DEPTH_LEVEL,
                IBLOCK_SECTION_ID,
                SUBCATEGORIES: catalog.filter(
                  (item) => item.IBLOCK_SECTION_ID === ID && item.DEPTH_LEVEL === '3',
                ),
              });
          }
        });
      }
    });
    setItems(arr);
  }, [catalog]);

  return (
    <div className={style.catalog__wrap}>
      <div className={style.wrap}>
        <div className={style.empty}></div>
        <div className={style.catalog}>
          <div className={style.column}>
            {items.map(({ ID, NAME, SUBCATEGORIES }): any => (
              <div className={style.item__wrap} key={ID}>
                <Link
                  href={'/catalog/' + ID}
                  className={style.item}
                  onClick={() => setMenuOpen((prev) => !prev)}>
                  {NAME}{' '}
                  {SUBCATEGORIES && SUBCATEGORIES.length >= 1 && (
                    <img className={style.arrow} src={arrow.src} />
                  )}
                </Link>
                {SUBCATEGORIES && SUBCATEGORIES.length >= 1 && (
                  <div className={style.categories}>
                    {SUBCATEGORIES.map(({ ID, NAME, SUBCATEGORIES }) => (
                      <div className={style.subitem} key={ID}>
                        <Link href={'/catalog/' + ID} onClick={() => setMenuOpen((prev) => !prev)}>
                          {NAME}{' '}
                          {SUBCATEGORIES && SUBCATEGORIES.length >= 1 && (
                            <img className={style.arrow} src={arrow.src} />
                          )}
                        </Link>
                        {SUBCATEGORIES && SUBCATEGORIES.length >= 1 && (
                          <div className={style.subcategories}>
                            {SUBCATEGORIES.map(({ ID, NAME }) => (
                              <div className={style.subcategories__item} key={ID}>
                                <Link
                                  href={'/catalog/' + ID}
                                  className={style.item}
                                  onClick={() => setMenuOpen((prev) => !prev)}>
                                  {NAME}
                                </Link>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default DropDownMenu;
