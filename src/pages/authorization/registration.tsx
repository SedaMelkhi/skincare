import { NextPage } from 'next';
import Link from 'next/link';

import Layout from '@/components/layout/Layout';

import style from './authorization.module.sass';

const Authorization: NextPage = () => {
  return (
    <Layout title="Регистрация">
      <section className={style.sign_up_page}>
        <h1 className={style.title}>новый AкКаунт</h1>
        <form action="">
          <input className={style.input_field} type="text" placeholder="Имя *" required />
          <input className={style.input_field} type="tel" placeholder="Номер телефона *" required />
          <input
            className={style.input_field}
            type="password"
            placeholder="Придумайте пароль *"
            required
          />
          <input
            className={style.input_field}
            type="password"
            placeholder="Подтвердите пароль *"
            required
          />
        </form>

        <Link href="/authorization/confirmed" className={style.btn + ' ' + style.btn_bg_white}>
          Создать аккаунт
        </Link>
        <p className={style.sign_up_page__cta}>
          У вас уже есть аккаунт?{' '}
          <Link href="/authorization/signin" className={style.link_btn}>
            Войти
          </Link>
        </p>
      </section>
    </Layout>
  );
};

export default Authorization;
