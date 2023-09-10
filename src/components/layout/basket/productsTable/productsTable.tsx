import { FC, useState } from 'react';

import closeSvg from './../../../../../public/close.svg';
import saveSvg from './../../../../../public/save.svg';
import minusSvg from './../../../../../public/minus.svg';
import plusSvg from './../../../../../public/plus.svg';

import style from './productsTable.module.sass';

type Size = {
  size: string;
  id: number;
};

const ProductsTable: FC = () => {
  const [activeSize, setActiveSize] = useState(0);
  const [count, setCount] = useState(0);
  const sizes: Size[] = [
    {
      size: '100мл',
      id: 0,
    },
    {
      size: '250мл',
      id: 1,
    },
    {
      size: '350мл',
      id: 2,
    },
  ];
  return (
    <div className={style.table}>
      <div className={style.row}>
        <div className={style.top}>
          <div>
            <div className={style.image}></div>
          </div>
          <div className={style.column}>
            <div className={style.flex}>
              <div>
                <div className={style.title}>SKIN&LAB Porebarrier Clear Pad очищающие пэды</div>
                <div className={style.sizes}>
                  {' '}
                  {sizes.map(({ size, id }) => (
                    <div
                      className={style.size + ' ' + (activeSize === id ? style.active : '')}
                      key={id}
                      onClick={() => setActiveSize(id)}>
                      {size}
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
              <div className={style.counter}>
                <div
                  className={style.minus}
                  onClick={() => count > 0 && setCount((prev) => prev - 1)}>
                  <img src={minusSvg.src} alt="" />
                </div>
                <span className={style.count} onClick={() => setCount((prev) => prev + 1)}>
                  {count}
                </span>
                <div className={style.plus}>
                  <img src={plusSvg.src} alt="" />
                </div>
              </div>
              <div className={style.price}> 2 400 ₽</div>
            </div>
          </div>
        </div>
      </div>
      <div className={style.row}>
        <div className={style.top}>
          <div>
            <div className={style.image}></div>
          </div>
          <div className={style.column}>
            <div className={style.flex}>
              <div>
                <div className={style.title}>SKIN&LAB Porebarrier Clear Pad очищающие пэды</div>
                <div className={style.sizes}>
                  {' '}
                  {sizes.map(({ size, id }) => (
                    <div
                      className={style.size + ' ' + (activeSize === id ? style.active : '')}
                      key={id}
                      onClick={() => setActiveSize(id)}>
                      {size}
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
              <div className={style.counter}>
                <div
                  className={style.minus}
                  onClick={() => count > 0 && setCount((prev) => prev - 1)}>
                  <img src={minusSvg.src} alt="" />
                </div>
                <span className={style.count} onClick={() => setCount((prev) => prev + 1)}>
                  {count}
                </span>
                <div className={style.plus}>
                  <img src={plusSvg.src} alt="" />
                </div>
              </div>
              <div className={style.price}> 2 400 ₽</div>
            </div>
          </div>
        </div>
      </div>
      <div className={style.row}>
        <div className={style.top}>
          <div>
            <div className={style.image}></div>
          </div>
          <div className={style.column}>
            <div className={style.flex}>
              <div>
                <div className={style.title}>SKIN&LAB Porebarrier Clear Pad очищающие пэды</div>
                <div className={style.sizes}>
                  {' '}
                  {sizes.map(({ size, id }) => (
                    <div
                      className={style.size + ' ' + (activeSize === id ? style.active : '')}
                      key={id}
                      onClick={() => setActiveSize(id)}>
                      {size}
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
              <div className={style.counter}>
                <div
                  className={style.minus}
                  onClick={() => count > 0 && setCount((prev) => prev - 1)}>
                  <img src={minusSvg.src} alt="" />
                </div>
                <span className={style.count} onClick={() => setCount((prev) => prev + 1)}>
                  {count}
                </span>
                <div className={style.plus}>
                  <img src={plusSvg.src} alt="" />
                </div>
              </div>
              <div className={style.price}> 2 400 ₽</div>
            </div>
          </div>
        </div>
      </div>
      <div className={style.row}>
        <div className={style.top}>
          <div>
            <div className={style.image}></div>
          </div>
          <div className={style.column}>
            <div className={style.flex}>
              <div>
                <div className={style.title}>SKIN&LAB Porebarrier Clear Pad очищающие пэды</div>
                <div className={style.sizes}>
                  {' '}
                  {sizes.map(({ size, id }) => (
                    <div
                      className={style.size + ' ' + (activeSize === id ? style.active : '')}
                      key={id}
                      onClick={() => setActiveSize(id)}>
                      {size}
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
              <div className={style.counter}>
                <div
                  className={style.minus}
                  onClick={() => count > 0 && setCount((prev) => prev - 1)}>
                  <img src={minusSvg.src} alt="" />
                </div>
                <span className={style.count} onClick={() => setCount((prev) => prev + 1)}>
                  {count}
                </span>
                <div className={style.plus}>
                  <img src={plusSvg.src} alt="" />
                </div>
              </div>
              <div className={style.price}> 2 400 ₽</div>
            </div>
          </div>
        </div>
      </div>
      <div className={style.row}>
        <div className={style.top}>
          <div>
            <div className={style.image}></div>
          </div>
          <div className={style.column}>
            <div className={style.flex}>
              <div>
                <div className={style.title}>SKIN&LAB Porebarrier Clear Pad очищающие пэды</div>
                <div className={style.sizes}>
                  {' '}
                  {sizes.map(({ size, id }) => (
                    <div
                      className={style.size + ' ' + (activeSize === id ? style.active : '')}
                      key={id}
                      onClick={() => setActiveSize(id)}>
                      {size}
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
              <div className={style.counter}>
                <div
                  className={style.minus}
                  onClick={() => count > 0 && setCount((prev) => prev - 1)}>
                  <img src={minusSvg.src} alt="" />
                </div>
                <span className={style.count} onClick={() => setCount((prev) => prev + 1)}>
                  {count}
                </span>
                <div className={style.plus}>
                  <img src={plusSvg.src} alt="" />
                </div>
              </div>
              <div className={style.price}> 2 400 ₽</div>
            </div>
          </div>
        </div>
      </div>
      <div className={style.row}>
        <div className={style.top}>
          <div>
            <div className={style.image}></div>
          </div>
          <div className={style.column}>
            <div className={style.flex}>
              <div>
                <div className={style.title}>SKIN&LAB Porebarrier Clear Pad очищающие пэды</div>
                <div className={style.sizes}>
                  {' '}
                  {sizes.map(({ size, id }) => (
                    <div
                      className={style.size + ' ' + (activeSize === id ? style.active : '')}
                      key={id}
                      onClick={() => setActiveSize(id)}>
                      {size}
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
              <div className={style.counter}>
                <div
                  className={style.minus}
                  onClick={() => count > 0 && setCount((prev) => prev - 1)}>
                  <img src={minusSvg.src} alt="" />
                </div>
                <span className={style.count} onClick={() => setCount((prev) => prev + 1)}>
                  {count}
                </span>
                <div className={style.plus}>
                  <img src={plusSvg.src} alt="" />
                </div>
              </div>
              <div className={style.price}> 2 400 ₽</div>
            </div>
          </div>
        </div>
      </div>
      <div className={style.row}>
        <div className={style.top}>
          <div>
            <div className={style.image}></div>
          </div>
          <div className={style.column}>
            <div className={style.flex}>
              <div>
                <div className={style.title}>SKIN&LAB Porebarrier Clear Pad очищающие пэды</div>
                <div className={style.sizes}>
                  {' '}
                  {sizes.map(({ size, id }) => (
                    <div
                      className={style.size + ' ' + (activeSize === id ? style.active : '')}
                      key={id}
                      onClick={() => setActiveSize(id)}>
                      {size}
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
              <div className={style.counter}>
                <div
                  className={style.minus}
                  onClick={() => count > 0 && setCount((prev) => prev - 1)}>
                  <img src={minusSvg.src} alt="" />
                </div>
                <span className={style.count} onClick={() => setCount((prev) => prev + 1)}>
                  {count}
                </span>
                <div className={style.plus}>
                  <img src={plusSvg.src} alt="" />
                </div>
              </div>
              <div className={style.price}> 2 400 ₽</div>
            </div>
          </div>
        </div>
      </div>
      <div className={style.row}>
        <div className={style.top}>
          <div>
            <div className={style.image}></div>
          </div>
          <div className={style.column}>
            <div className={style.flex}>
              <div>
                <div className={style.title}>SKIN&LAB Porebarrier Clear Pad очищающие пэды</div>
                <div className={style.sizes}>
                  {' '}
                  {sizes.map(({ size, id }) => (
                    <div
                      className={style.size + ' ' + (activeSize === id ? style.active : '')}
                      key={id}
                      onClick={() => setActiveSize(id)}>
                      {size}
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
              <div className={style.counter}>
                <div
                  className={style.minus}
                  onClick={() => count > 0 && setCount((prev) => prev - 1)}>
                  <img src={minusSvg.src} alt="" />
                </div>
                <span className={style.count} onClick={() => setCount((prev) => prev + 1)}>
                  {count}
                </span>
                <div className={style.plus}>
                  <img src={plusSvg.src} alt="" />
                </div>
              </div>
              <div className={style.price}> 2 400 ₽</div>
            </div>
          </div>
        </div>
      </div>
      <div className={style.row}>
        <div className={style.top}>
          <div>
            <div className={style.image}></div>
          </div>
          <div className={style.column}>
            <div className={style.flex}>
              <div>
                <div className={style.title}>SKIN&LAB Porebarrier Clear Pad очищающие пэды</div>
                <div className={style.sizes}>
                  {' '}
                  {sizes.map(({ size, id }) => (
                    <div
                      className={style.size + ' ' + (activeSize === id ? style.active : '')}
                      key={id}
                      onClick={() => setActiveSize(id)}>
                      {size}
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
              <div className={style.counter}>
                <div
                  className={style.minus}
                  onClick={() => count > 0 && setCount((prev) => prev - 1)}>
                  <img src={minusSvg.src} alt="" />
                </div>
                <span className={style.count} onClick={() => setCount((prev) => prev + 1)}>
                  {count}
                </span>
                <div className={style.plus}>
                  <img src={plusSvg.src} alt="" />
                </div>
              </div>
              <div className={style.price}> 2 400 ₽</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsTable;
