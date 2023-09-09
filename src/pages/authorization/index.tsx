import { NextPage } from 'next';
import Link from 'next/link';

import Layout from '@/components/layout/Layout';

import image from './../../../public/images/swatch.svg';

import style from './authorization.module.sass';

const Authorization: NextPage = () => {
  return (
    <Layout title="Авторизация">
      <section className={style.registration_page}>
        <img src={image.src} alt="Swatch" className={style.registration_page__swatch} />
        <h1 className={style.title}>Покупай со скидкой</h1>
        <p className={style.subtitle}>Зарегистрируйтесь, чтобы начать копить бонусы.</p>
        <div className={style.btns}>
          <Link href="/authorization/signin" className={style.btn}>
            Войти
          </Link>
          <Link href="/authorization/registration" className={style.btn + ' ' + style.btn_bg_white}>
            Создать аккаунт
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Authorization;
