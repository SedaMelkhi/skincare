import { FC } from 'react';
import style from './footer.module.sass';

const Footer: FC = () => {
  return (
    <footer className={style.footer__wrap}>
      <div className="wrap">
        <div className={style.footer}>
          <div className={style.flex}>
            <div>
              <h2 className={style.title}>Расслабьтесь. Мы все сделаем за вас</h2>
              <div className={style.button}>
                Записаться на консультацию <img src="./arrow.svg" />
              </div>
            </div>
            <div className={style.menu}>
              <div className={style.column}>
                <div className={style.subtitle}>
                  Каталог <img src="./arrow.svg" />
                </div>
                <div className={style.item}>Акции</div>
                <div className={style.item}>Новинки</div>
                <div className={style.item}>Бренды</div>
              </div>
              <div className={style.column}>
                <div className={style.subtitle}>клиентам</div>
                <div className={style.item}>Доставка</div>
                <div className={style.item}>Возврат</div>
                <div className={style.item}>Помощь</div>
              </div>
              <div className={style.column}>
                <div className={style.subtitle}>Контакты</div>
                <div className={style.item}>
                  <a href="mailto:skincareagents@mail.com">skincareagents@mail.com</a>
                </div>
                <div className={style.item}>
                  <a href="tel:+79280853618">+7 (928) 085-36-18</a>
                </div>
                <div className={style.item}>
                  Написать в Telegram <img src="./arrow.svg" />
                </div>
              </div>
              <div className={style.column}>
                <div className={style.subtitle}>Адрес</div>
                <div className={style.item}>Грозный, Орзамиева 8, 6 этаж</div>
                <div className={style.item}>10:00-19:00</div>
              </div>
            </div>
          </div>
          <div className={style.end}>
            <img src="./logo.svg" alt="" className={style.logo} />
            <div className={style.end__text}>
              <p className={style.text}>Политика обработки персональных данных</p>
              <p className={style.text}>© 2023 — Skincare Agents</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
