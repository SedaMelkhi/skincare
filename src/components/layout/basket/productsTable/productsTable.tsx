import { FC, useState } from 'react';
import { IbasketData } from '@/interfaces/basket.interface';

import BasketProduct from '../basketProduct/basketProduct';

import style from './productsTable.module.sass';

const ProductsTable: FC<{ basketArr: IbasketData[] | [] }> = ({ basketArr }) => {
  return (
    <div className={style.table}>
      {basketArr.map(
        ({ name, quantity, finalPrice, scuId, parentItem, cartId, fullPrice, price }) => (
          <BasketProduct
            key={scuId}
            name={name}
            quantity={quantity}
            finalPrice={finalPrice}
            scuId={scuId}
            parentItem={parentItem}
            cartId={cartId}
            fullPrice={fullPrice}
            price={price}
          />
        ),
      )}
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
