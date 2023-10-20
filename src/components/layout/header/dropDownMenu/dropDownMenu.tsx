import Link from 'next/link';

import { FC, useEffect, useState } from 'react';

import { CatalogObj } from '@/interfaces/catalog.interface';

import arrow from './../../../../../public/arr.svg';

import style from './dropDownMenu.module.sass';

interface CatalogItem {
  ID: string;
  NAME: string;
  DESCRIPTION: string;
  DEPTH_LEVEL: string;
  IBLOCK_SECTION_ID: string | null;
  SUBCATEGORIES?: CatalogItem[];
}

type CatalogItems = CatalogItem[];

const DropDownMenu: FC<CatalogObj> = (catalog) => {
  const [items, setItems] = useState<CatalogItems>([]);
  useEffect(() => {
    let arr: CatalogItems = [];
    catalog.catalog.forEach(({ ID, NAME, DESCRIPTION, DEPTH_LEVEL, IBLOCK_SECTION_ID }) => {
      if (DEPTH_LEVEL === '1') {
        arr.push({ ID, NAME, DESCRIPTION, DEPTH_LEVEL, IBLOCK_SECTION_ID, SUBCATEGORIES: [] });
      }
    });
    catalog.catalog.forEach(({ ID, NAME, DESCRIPTION, DEPTH_LEVEL, IBLOCK_SECTION_ID }) => {
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
                SUBCATEGORIES: catalog.catalog.filter(
                  (item) => item.IBLOCK_SECTION_ID === ID && item.DEPTH_LEVEL === '3',
                ),
              });
          }
        });
      }
    });
    setItems(arr);
  }, [catalog]);
  console.log(items);

  return (
    <div className={style.catalog__wrap}>
      <div className={style.wrap}>
        <div className={style.catalog}>
          <div className={style.column}>
            {items.map(({ ID, NAME, SUBCATEGORIES }): any => (
              <div className={style.item__wrap} key={ID}>
                <Link href={'/catalog/' + ID} className={style.item}>
                  {NAME}{' '}
                  {SUBCATEGORIES && SUBCATEGORIES.length >= 1 && (
                    <img className={style.arrow} src={arrow.src} />
                  )}
                </Link>
                {SUBCATEGORIES && SUBCATEGORIES.length >= 1 && (
                  <div className={style.categories}>
                    {SUBCATEGORIES.map(({ ID, NAME, SUBCATEGORIES }) => (
                      <div className={style.subitem} key={ID}>
                        <Link href={'/catalog/' + ID}>
                          {NAME}{' '}
                          {SUBCATEGORIES && SUBCATEGORIES.length >= 1 && (
                            <img className={style.arrow} src={arrow.src} />
                          )}
                        </Link>
                        {SUBCATEGORIES && SUBCATEGORIES.length >= 1 && (
                          <div className={style.subcategories}>
                            {SUBCATEGORIES.map(({ ID, NAME }) => (
                              <div className={style.subcategories__item} key={ID}>
                                <Link href={'/catalog/' + ID} className={style.item}>
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
