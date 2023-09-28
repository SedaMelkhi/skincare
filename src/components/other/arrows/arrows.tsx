import { FC } from 'react';
import style from './arrows.module.sass';

const Arrows: FC<{ next: string; prev: string }> = ({ next, prev }) => {
  // const mainTitle = document.querySelector('#main-title rect');
  // console.log(`Svg is ${mainTitle.getTotalLength()}`);

  return (
    <div className={style.arrows}>
      <div className={prev + ' ' + style.arrow__left} id="main-title">
        <svg
          width="36"
          height="36"
          viewBox="0 0 36 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M19.9062 11.6438L26.3569 18L19.9062 24.3561L19.2044 23.6438L24.4247 18.5H9.64453V17.5H24.4247L19.2044 12.3561L19.9062 11.6438Z"
            fill="#19171A"
          />
          <rect
            x="0.25"
            y="0.25"
            width="35.5"
            height="35.5"
            rx="17.75"
            stroke="#C3BDC7"
            strokeWidth="0.5"
          />
        </svg>
      </div>
      <div className={next + ' ' + style.arrow__right}>
        <svg
          width="36"
          height="36"
          viewBox="0 0 36 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M19.9062 11.6438L26.3569 18L19.9062 24.3561L19.2044 23.6438L24.4247 18.5H9.64453V17.5H24.4247L19.2044 12.3561L19.9062 11.6438Z"
            fill="#19171A"
          />
          <rect
            x="0.25"
            y="0.25"
            width="35.5"
            height="35.5"
            rx="17.75"
            stroke="#C3BDC7"
            strokeWidth="0.5"
          />
        </svg>
      </div>
    </div>
  );
};
export default Arrows;
