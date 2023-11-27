import { FC } from 'react';
import Marquee from 'react-fast-marquee';

import { RunningLineArray } from '@/interfaces/runningLine.interface';

import style from './pinkMarquee.module.sass';

interface PinkMarqueeProps {
  isVisible: boolean;
  runningLine: RunningLineArray;
}

const PinkMarquee: FC<PinkMarqueeProps> = ({ isVisible, runningLine }) => {
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
          {runningLine.map(({ mainText, url }, i) => (
            <span key={i}>
              {mainText} <img src={url} alt="" />
            </span>
          ))}
        </Marquee>
      </div>

      <div className={style.marquee__wrap}>
        <Marquee className={style.marquee} speed={50}>
          {runningLine.map(({ mainText, url }, i) => (
            <span key={i}>
              {mainText} <img src={url} alt="" />
            </span>
          ))}
        </Marquee>
      </div>
    </>
  );
};
export default PinkMarquee;
