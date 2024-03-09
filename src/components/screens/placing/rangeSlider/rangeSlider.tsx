import { FC } from 'react';
import { Box, Slider } from '@mui/material';

import style from './rangeSlider.module.sass';

const RangeSlider: FC = () => {
  const marks = [
    {
      value: 1,
      label: 'Доставка',
    },
    {
      value: 2,
      label: 'Получатель',
    },
    {
      value: 3,
      label: 'Оплата',
    },
  ];
  return (
    <Box sx={{ width: 'calc(100% - 24px)' }}>
      <Slider
        disabled
        defaultValue={2}
        min={1}
        max={3}
        step={1}
        marks={marks}
        classes={{
          rail: style.rail, //цвет линии
          track: style.track, //активная линия
          thumb: style.thumb, //активная точка ползунка
          mark: style.mark, //точки
          markActive: style.mark_active,
          markLabel: style.mark_label,
          markLabelActive: style.mark_label_active,
          valueLabel: style.label,
        }}
      />
    </Box>
  );
};

export default RangeSlider;
