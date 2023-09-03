import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

import style from './rangeSlider.module.sass';

export default function RangeSlider() {
  const [value, setValue] = React.useState<number[]>([0, 50000]);

  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number[]);
  };

  return (
    <div>
      <div className={style.line}>
        <span>От {value[0]}₽</span>
        <span>до {value[1]}₽</span>
      </div>
      <Box sx={{ width: 299 }} className={style.slider}>
        <Slider
          getAriaLabel={() => 'Temperature range'}
          value={value}
          onChange={handleChange}
          min={0}
          max={50000}
          step={100}
          classes={{
            track: style.track, //активная линия
            thumb: style.thumb, //точки
            rail: style.rail,
          }}
        />
      </Box>
    </div>
  );
}
