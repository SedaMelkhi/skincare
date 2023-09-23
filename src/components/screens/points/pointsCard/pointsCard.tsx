import { FC, useState } from 'react';

import { StyledEngineProvider } from '@mui/material';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

import starSvg from './../../../../../public/violetStar.svg';

import style from './pointsCard.module.sass';

const PointsCard: FC = () => {
  const [value, setValue] = useState<number[]>([0, 50000]);

  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number[]);
  };
  const marks = [
    {
      value: 3,
      label: '3%',
    },
    {
      value: 6,
      label: '6%',
    },
    {
      value: 10,
      label: '10%',
    },
  ];

  function valuetext(value: number) {
    return `${value}°C`;
  }

  function valueLabelFormat(value: number) {
    return marks.findIndex((mark) => mark.value === value) + 1;
  }
  return (
    <div className={style.wrap}>
      <div className={style.card}>
        <div className={style.card__top}>
          <div className={style.title}>моя скидка 3%</div>
          <div className={style.text}>
            Баллы — <span>133</span>
            <div className={style.border}>
              <img src={starSvg.src} alt="" />
            </div>
          </div>
          <div className={style.text}>Баллы сгорят через 7 дней</div>
        </div>
        <div className={style.bottom}>
          <Box sx={{ width: 300 }}>
            <Slider
              aria-label="Restricted values"
              defaultValue={0}
              min={3}
              max={10}
              valueLabelFormat={valueLabelFormat}
              getAriaValueText={valuetext}
              step={1}
              valueLabelDisplay="auto"
              marks={marks}
            />
          </Box>
          <div className={style.question}>Как получить баллы?</div>
        </div>
      </div>
    </div>
  );
};

export default PointsCard;
