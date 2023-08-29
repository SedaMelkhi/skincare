import { FC } from 'react';

import style from './circleArrow.module.sass';

interface CircleArrowProps {
  sizeCircle: string;
  sizeImg: string;
  color?: string;
}

const CircleArrow: FC<CircleArrowProps> = ({ sizeCircle, sizeImg, color }) => {
  return (
    <div
      className={style.circle}
      style={{ width: sizeCircle, height: sizeCircle, borderColor: color }}>
      <span style={{ width: sizeImg }}>
        <svg
          width="45"
          height="18"
          viewBox="0 0 45 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M31.5741 3L37.5 9M31.5741 15L37.5 9M37.5 9L31.5741 9L7.5 9"
            stroke={color || '#19171A'}
            stroke-width="1.5"
          />
        </svg>
      </span>
    </div>
  );
};
export default CircleArrow;
