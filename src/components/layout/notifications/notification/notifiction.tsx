import { FC } from 'react';
import Link from 'next/link';
import { useDispatch } from 'react-redux';

import { setIsNotifications } from '@/redux/basketSlice/basketSlice';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';

import starSvg from '@/../public/violetStar.svg';
import arrowSvg from '@/../public/arrowDown.svg';

import style from './notification.module.sass';
import Button from '@/components/other/button/button';

interface NotificationProps {
  title: string;
  type: string;
  desc: string;
  date: string;
  image: string;
}

const Notification: FC<NotificationProps> = ({ title, type, desc, date, image }) => {
  const dispatch = useDispatch();
  const color =
    type === 'points'
      ? 'red'
      : type === 'order'
      ? 'green'
      : type === 'productStock' || type === 'AddPoints'
      ? 'violet'
      : 'black';
  return (
    <div className={style.product}>
      <div className={style.flex}>
        <div className={style.block}>
          <div className={style.title + ' ' + style[color]}>{title}</div>
          <div className={style.flex_gap}>
            <div
              className={
                style.image +
                ' ' +
                (type !== 'points' && type !== 'AddPoints' ? style.image_big : '')
              }
              style={{ backgroundImage: `url(${image})` }}></div>
            <div className={style.text}>
              <div
                className={
                  style.desc + ' ' + (type === 'processed' ? style.violet + ' ' + style.upper : '')
                }>
                {type === 'order' && <div className={style.upper}>почта россии</div>}
                {desc}
              </div>
              {type === 'points' ? (
                <div className={style.points}>
                  <div className={style.points_flex}>
                    Баллы — <span>133</span>
                    <div className={style.border}>
                      <img src={starSvg.src} alt="" />
                    </div>
                  </div>
                  <div>Спишутся через 7 дней</div>
                </div>
              ) : type === 'order' ? (
                <div className={style.accordion}>
                  <Accordion
                    sx={{
                      '& .Mui-expanded': {
                        minHeight: 'auto',
                        margin: '0',
                      },
                    }}>
                    <AccordionSummary
                      expandIcon={<img src={arrowSvg.src} alt="" className={style.arrow} />}
                      sx={{
                        padding: '0',
                        justifyContent: 'start',
                        minHeight: 'auto',
                        '& .Mui-expanded': {
                          margin: '0',
                        },
                        '& .MuiAccordionSummary-content': {
                          flexGrow: '0',
                          margin: '0',
                        },
                        '& .Mui-expanded img': {
                          transform: 'translate(-4px, 5px)',
                        },
                      }}
                      aria-controls="panel1a-content"
                      id="panel1a-header">
                      <div className={style.work}>
                        <div>Режим работы</div>
                      </div>
                    </AccordionSummary>
                    <AccordionDetails
                      sx={{
                        padding: '0',
                      }}>
                      <div className={style.timetable}>
                        <table>
                          <tbody>
                            <tr>
                              <td className={style.box + ' ' + style.day}>пн</td>
                              <td className={style.box}>09:00-18:00</td>
                            </tr>
                            <tr>
                              <td className={style.box + ' ' + style.day}>вт</td>
                              <td className={style.box}>09:00-18:00</td>
                            </tr>
                            <tr>
                              <td className={style.box + ' ' + style.day}>ср</td>
                              <td className={style.box}>09:00-18:00</td>
                            </tr>
                            <tr>
                              <td className={style.box + ' ' + style.day}>чт</td>
                              <td className={style.box}>09:00-18:00</td>
                            </tr>
                            <tr>
                              <td className={style.box + ' ' + style.day}>пт</td>
                              <td className={style.box}>09:00-18:00</td>
                            </tr>
                            <tr>
                              <td className={style.box + ' ' + style.day}>сб</td>
                              <td className={style.box}>09:00-18:00</td>
                            </tr>
                            <tr>
                              <td className={style.box + ' ' + style.day}>вс</td>
                              <td className={style.box}>выходной</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </AccordionDetails>
                  </Accordion>
                </div>
              ) : type === 'processed' ? (
                <div className={style.processed}>
                  <Accordion
                    sx={{
                      border: 'none',
                      background: 'transparent',
                      borderRadius: ' 0',
                      boxShadow: 'none',

                      '&:before': {
                        display: 'none',
                      },
                      '& .Mui-expanded': {
                        minHeight: 'auto',
                        margin: '0',
                      },
                    }}>
                    <AccordionSummary
                      expandIcon={<img src={arrowSvg.src} alt="" className={style.arrow} />}
                      sx={{
                        padding: '0',
                        justifyContent: 'start',
                        minHeight: 'auto',
                        '& .MuiAccordionSummary-content': {
                          flexGrow: '0',
                          margin: '0',
                        },
                        '& .Mui-expanded img': {
                          transform: 'translate(-4px, 5px)',
                        },
                      }}
                      aria-controls="panel1a-content"
                      id="panel1a-header">
                      <div className={style.work}>
                        <div>адрес пункта выдачи </div>
                      </div>
                    </AccordionSummary>
                    <AccordionDetails
                      sx={{
                        padding: '0',
                      }}>
                      <div className={style.timetable}>
                        г. Грозный ( Чеченская Республика ), проспект Мухаммеда Али ( бывший
                        проспект Кирова ), д 2А
                      </div>
                    </AccordionDetails>
                  </Accordion>
                </div>
              ) : type === 'AddPoints' ? (
                <div onClick={() => dispatch(setIsNotifications(false))} className={style.link}>
                  <Link href={'/profile/points'}>мои баллы</Link>
                  <img src={arrowSvg.src} alt="" className={style.arrow} />
                </div>
              ) : (
                <>
                  <div className={style.price}> 2 400 ₽</div>
                  <div className={style.btn}>
                    <Button text="Добавить в сумочку" height="44px" fontSize="14px" />
                  </div>
                </>
              )}
            </div>
          </div>
        </div>

        <div className={style.date}>{date}</div>
      </div>
    </div>
  );
};
export default Notification;
