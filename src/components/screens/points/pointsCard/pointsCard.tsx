import { FC } from 'react';

import { styled } from '@mui/material';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

import starSvg from './../../../../../public/violetStar.svg';

import style from './pointsCard.module.sass';

const PointsCard: FC = () => {
  const marks = [
    {
      value: 1,
      label: '1%',
    },
    {
      value: 25000,
      label: '5%',
    },
    {
      value: 50000,
      label: '10%',
    },
  ];
  const valueLabelFormat = (value: number) => {
    return `Ваша сумма покупок составляет  ${value} ₽`;
  };
  const PrettoSlider = styled(Slider)({
    color: '#52af77',
    height: 8,
    '& .MuiSlider-valueLabel': {
      fontSize: 14,
      padding: '8px 11px',
      borderRadius: '8px',
      backgroundColor: '#504655',
      textTransform: 'none',
    },
  });
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
          <div className={style.slider}>
            <Box sx={{ width: '100%' }}>
              <PrettoSlider
                //disabled
                aria-label="Restricted values"
                defaultValue={10000}
                min={0}
                max={50000}
                getAriaValueText={valueLabelFormat}
                valueLabelFormat={valueLabelFormat}
                step={1}
                valueLabelDisplay="auto"
                marks={marks}
                color="secondary"
                classes={{
                  rail: style.rail, //цвет линии
                  track: style.track, //активная линия
                  thumb: style.thumb, //активная точка ползунка
                  mark: style.mark, //точки
                  markActive: style.mark_active,
                  markLabel: style.mark_label,
                  markLabelActive: style.mark_label_active,
                }}
              />
            </Box>
          </div>
          <div className={style.question}>Как получить баллы?</div>
        </div>
      </div>
    </div>
  );
};

export default PointsCard;
