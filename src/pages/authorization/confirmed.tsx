import { NextPage } from 'next';
import Link from 'next/link';

import Layout from '@/components/layout/Layout';

import image from './../../../public/images/swatch-2.png';

import style from './authorization.module.sass';

const Confirmed: NextPage = () => {
  return (
    <Layout title="Забыли пароль">
      <section className={style.confirmation_page}>
        <div className={style.confirmation_page__swatch}>
          <img src={image.src} alt="Swatch" />
        </div>
        <div className={style.wrapper}>
          <h1 className={style.title}>новый Aккаунт</h1>
          <p className={style.subtitle}>
            Мы отправили вам код для подтверждения номера телефона через SMS.
          </p>
          <form action="">
            <input
              className={style.input_field}
              type="password"
              placeholder="Код *"
              maxLength={4}
              required
            />
          </form>
          <Link href="/authorization/numberconfirmed" className={style.btn}>
            Подтвердить
          </Link>
          <p className={style.cta}>
            Не получили SMS?{' '}
            <Link href="/authorization/registration" className={style.link_btn}>
              Поменять номер телефона
            </Link>{' '}
            или &nbsp;
            <button className={style.link_btn}>Отправить повторно</button>
            &nbsp;(через : 00:32 секунд)
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default Confirmed;
