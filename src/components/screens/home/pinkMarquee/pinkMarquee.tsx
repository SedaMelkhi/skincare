import { FC } from 'react';

import Marquee from 'react-fast-marquee';
import style from './pinkMarquee.module.sass';

interface PinkMarqueeProps {
  isVisible: boolean;
}

const PinkMarquee: FC<PinkMarqueeProps> = ({ isVisible }) => {
  return (
    <>
      <div className={style.marquee__wrap}>
        <Marquee
          className={
            style.marquee +
            ' ' +
            style.marquee__pc +
            (isVisible ? ` ${style.marquee__pc_show}` : '')
          }
          speed={1}>
          <span>
            бесплатная доставка от 3000 ₽ <img src="./sets/star.svg" alt="" />
          </span>
          <span>
            бесплатная доставка от 3000 ₽ <img src="./sets/star.svg" alt="" />
          </span>
          <span>
            бесплатная доставка от 3000 ₽ <img src="./sets/star.svg" alt="" />
          </span>
          <span>
            бесплатная доставка от 3000 ₽ <img src="./sets/star.svg" alt="" />
          </span>
          <span>
            бесплатная доставка от 3000 ₽ <img src="./sets/star.svg" alt="" />
          </span>
          <span>
            бесплатная доставка от 3000 ₽ <img src="./sets/star.svg" alt="" />
          </span>
        </Marquee>
      </div>

      <div className={style.marquee__wrap}>
        <Marquee className={style.marquee} speed={50}>
          <span>
            бесплатная доставка от 3000 ₽ <img src="./sets/star.svg" alt="" />
          </span>
          <span>
            бесплатная доставка от 3000 ₽ <img src="./sets/star.svg" alt="" />
          </span>
          <span>
            бесплатная доставка от 3000 ₽ <img src="./sets/star.svg" alt="" />
          </span>
          <span>
            бесплатная доставка от 3000 ₽ <img src="./sets/star.svg" alt="" />
          </span>
          <span>
            бесплатная доставка от 3000 ₽ <img src="./sets/star.svg" alt="" />
          </span>
          <span>
            бесплатная доставка от 3000 ₽ <img src="./sets/star.svg" alt="" />
          </span>
        </Marquee>
      </div>
    </>
  );
};
export default PinkMarquee;
