import Layout from '@/components/layout/Layout';
import { Accordion, AccordionDetails, AccordionSummary, Box, Slider } from '@mui/material';
import { FC, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { getTokenService } from '@/services/cdek.service';

import BasketRight from './basketRight/basketRight';

import arrowLeft from './../../../../public/arrow.svg';
import close from './../../../../public/close.svg';
import arrow from './../../../../public/arrowLeft.svg';
import whiteArrow from './../../../../public/whiteArrow.svg';
import plusSvg from './../../../../public/plusSimple.svg';
import arrowViolet from './../../../../public/arrowViolet.svg';

import style from './placing.module.sass';
import { getOrderInfoService } from '@/services/order.service';

// access_token: jwt-токен;
// token_type: тип токена (всегда принимает значение "bearer");
// expires_in: срок действия токена (по умолчанию 3600 секунд);
// scope: область действия токена (доступ к объектам и операциям над ними);
// jti: уникальный идентификатор токена.

const PlacingPage: FC = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [activeEl, setActiveEl] = useState<number>(0);
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

  const handleActiveChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setActiveEl(Number(event.target.value));
  };

  useEffect(() => {
   
    // const data = getOrderInfoService.getOrderInfo();
    // data.then((res) => console.log(res));
  }, []);

  return (
    <Layout title="Оформление заказа" nav={false}>
      <div className="wrap">
        <div className={style.nav}>
          <div className={style.arrowLeft}>
            <img src={arrowLeft.src} alt="" onClick={() => router.back()} />
          </div>
          <div className={style.title}>Оформление заказа</div>
          <div className={style.close}>
            <img src={close.src} alt="" onClick={() => router.back()} />
          </div>
        </div>
        <div className={style.container}>
          <div className={style.left}>
            <div className={style.slider}>
              <Box sx={{ width: 'calc(100% - 24px)' }}>
                <Slider
                  //disabled
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
            </div>
            <div className={style.subtitle}>Доставка</div>
            <div className={style.method}>
              <div className={style.method__title}>способ доставки</div>
              <Accordion className={style.accordion} expanded={isOpen}>
                <AccordionSummary
                  className={style.accordion__header}
                  aria-controls="panel1a-content"
                  id="panel1a-header">
                  <div className={style.item}>
                    <label
                      className={style.item__left}
                      htmlFor="one"
                      onChange={() => setActiveEl(0)}>
                      <div className={style.text}>
                        <input
                          type="radio"
                          name="method"
                          id="one"
                          className={style.input}
                          checked={0 === activeEl}
                          onChange={handleActiveChange}
                          value="Курьер по г. Грозный"
                        />
                        <div className={style.circle}>
                          <div className={style.active}></div>
                        </div>
                        <div className={style.desc}>Курьер по г. Грозный</div>
                      </div>
                      <div className={style.price}>200 ₽</div>
                    </label>
                    <div className={style.arrow__wrap}>
                      <img
                        src={arrow.src}
                        alt=""
                        className={isOpen ? style.hidden : style.arrow}
                        onClick={() => setIsOpen(!isOpen)}
                      />
                    </div>
                  </div>
                </AccordionSummary>
                <AccordionDetails className={style.accordion__body}>
                  <div className={style.wrap}>
                    <div className={style.item}>
                      <label
                        className={style.item__left}
                        htmlFor="two"
                        onChange={() => setActiveEl(1)}>
                        <div className={style.text}>
                          <input
                            type="radio"
                            name="method"
                            id="two"
                            className={style.input}
                            checked={1 === activeEl}
                            onChange={handleActiveChange}
                            value="Пункт выдачи"
                          />
                          <div className={style.circle}>
                            <div className={style.active}></div>
                          </div>
                          <div className={style.desc}>
                            Пункт выдачи
                            <div className={style.grey}>Почта России, СДЭК</div>
                          </div>
                        </div>
                        <div className={style.price}>350 ₽</div>
                      </label>
                      <div className={style.arrow__wrap}></div>
                    </div>
                    <div className={style.item}>
                      <label
                        className={style.item__left}
                        htmlFor="three"
                        onChange={() => setActiveEl(2)}>
                        <div className={style.text}>
                          <input
                            type="radio"
                            name="method"
                            id="three"
                            className={style.input}
                            checked={2 === activeEl}
                            onChange={handleActiveChange}
                            value="Самовывоз в г. Грозный"
                          />
                          <div className={style.circle}>
                            <div className={style.active}></div>
                          </div>
                          <div className={style.desc}>
                            Самовывоз в г. Грозный
                            <div className={style.grey}>Почта России, СДЭК</div>
                          </div>
                        </div>
                        <div className={style.price}>Бесплатно</div>
                      </label>
                      <div className={style.arrow__wrap}>
                        <img
                          src={arrow.src}
                          alt=""
                          className={isOpen ? style.arrow__close : style.hidden}
                          onClick={() => setIsOpen(!isOpen)}
                        />
                      </div>
                    </div>
                  </div>
                </AccordionDetails>
              </Accordion>
            </div>
            <div className={style.method + ' ' + style.flex_start}>
              <div className={style.method__title}>адрес доставки</div>
              <div className={style.box}>
                <div className={style.address}>г. Грозный, пр Мухаммеда Али, д 2</div>
                <button className={style.btn}>изменить адрес</button>
              </div>
            </div>
            <div className={style.button}>
              продолжить
              <div>
                <img src={whiteArrow.src} alt="" />
              </div>
            </div>
          </div>
          <div className={style.right}>
            <Link href={'/authorization'}>
              <div className={style.message}>
                <div className={style.message__text}>
                  Зарегистрируйтесь/войдите, чтобы получать кэшбек со своих покупок
                </div>
                <div>
                  <img src={arrowViolet.src} alt="" />
                </div>
              </div>
            </Link>
            <BasketRight />
            <div className={style.promocode__wrap + ' ' + style.promocode__first}>
              <input type="text" className={style.promocode} placeholder="Промокод" />
              <img src={plusSvg.src} alt="" />
            </div>
            <div className={style.promocode__wrap}>
              <input type="text" className={style.promocode} placeholder="Подарочный сертификат" />
              <img src={plusSvg.src} alt="" />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PlacingPage;
