import { FC, useState } from 'react';
import { IbasketData } from '@/interfaces/basket.interface';

import closeSvg from './../../../../../public/close.svg';
import saveSvg from './../../../../../public/save.svg';
import minusSvg from './../../../../../public/minus.svg';
import plusSvg from './../../../../../public/plus.svg';

import style from './productsTable.module.sass';

const ProductsTable: FC<{ basketArr: IbasketData[] | [] }> = ({ basketArr }) => {
  console.log(basketArr);
  const handleSizeClick = () => {
    // Логика обработки клика по размеру
  };

  return (
    <div className={style.table}>
      {basketArr.map(({ name, quantity, finalPrice, scuId, parentItem }) => {
        // Создаем Set уникальных значений
        const uniqueScuValue: string[] = Array.from(
          new Set(parentItem?.SCU.map(({ value }) => value)),
        );
        const [activeScu, setActiveScu] = useState(
          parentItem?.SCU.filter(({ id, value }) => id === scuId),
        );
        return (
          <div className={style.row} key={scuId}>
            <div className={style.top}>
              <div>
                <div className={style.image}></div>
              </div>
              <div className={style.column}>
                <div className={style.flex}>
                  <div>
                    <div className={style.title}>{name}</div>
                    <div className={style.sizes}>
                      {uniqueScuValue.map((value, i) => (
                        <div
                          className={
                            style.size + ' ' + (activeScu[0].value === value ? style.active : '')
                          }
                          key={i}
                          onClick={() => handleSizeClick()}>
                          {value}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <div className={style.save}>
                      <img src={saveSvg.src} alt="save" />
                    </div>
                    <div className={style.close}>
                      <img src={closeSvg.src} alt="close" />
                    </div>
                  </div>
                </div>
                <div className={style.bottom}>
                  <div className={style.price}> {finalPrice} ₽</div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProductsTable;

// const ProductsTable: FC<{ basketArr: IbasketData[] | [] }> = ({ basketArr }) => {
//   console.log(basketArr);

//   return (
//     <div className={style.table}>
//       {basketArr.map(({ name, quantity, finalPrice, scuId }) => (
//         <div className={style.row} key={scuId}>
//           <div className={style.top}>
//             <div>
//               <div className={style.image}></div>
//             </div>
//             <div className={style.column}>
//               <div className={style.flex}>
//                 <div>
//                   <div className={style.title}>{name}</div>
//                   <div className={style.sizes}>
//                     {/* {basketArr.parentItem?.SCU?.map(({ size, active, sizeId }, i) => (
//                       <div
//                         className={style.size + ' ' + (active ? style.active : '')}
//                         key={i}
//                         onClick={() =>
//                           setProducts((products) =>
//                             products.map((product) =>
//                               product.id === id
//                                 ? {
//                                     ...product,
//                                     sizes: product.sizes.map((item) =>
//                                       item.sizeId === sizeId
//                                         ? { ...item, active: true }
//                                         : { ...item, active: false },
//                                     ),
//                                   }
//                                 : product,
//                             ),
//                           )
//                         }>
//                         {size}
//                       </div>
//                     ))} */}
//                   </div>
//                 </div>
//                 <div>
//                   <div className={style.save}>
//                     <img src={saveSvg.src} alt="save" />
//                   </div>
//                   <div className={style.close}>
//                     <img src={closeSvg.src} alt="close" />
//                   </div>
//                 </div>
//               </div>
//               <div className={style.bottom}>
//                 {/* <div className={style.counter}>
//                   <div
//                     className={style.minus}
//                     onClick={() =>
//                       count > 0 &&
//                       setProducts((products) =>
//                         products.map((item) =>
//                           item.id === id ? { ...item, count: count - 1 } : item,
//                         ),
//                       )
//                     }>
//                     <img src={minusSvg.src} alt="" />
//                   </div>
//                   <span className={style.count}>{count}</span>
//                   <div
//                     className={style.plus}
//                     onClick={() =>
//                       setProducts((products) =>
//                         products.map((item) =>
//                           item.id === id ? { ...item, count: count + 1 } : item,
//                         ),
//                       )
//                     }>
//                     <img src={plusSvg.src} alt="" />
//                   </div>
//                 </div> */}
//                 <div className={style.price}> {finalPrice} ₽</div>
//               </div>
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };
