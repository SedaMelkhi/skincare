import { NextPage } from 'next';
import Link from 'next/link';

import Layout from '@/components/layout/Layout';

import image from './../../../public/images/asterisk.svg';

import style from './authorization.module.sass';

const NewPassword: NextPage = () => {
  return (
    <Layout title="Подтверждение номера">
      <section className={style.restore_password_page}>
        <h1 className={style.title}>Выберите новый пароль</h1>
        <form action="">
          <div className={style.input_field_inner}>
            <label htmlFor="" className={style.input_field__label_text}>
              Новый пароль <img src={image.src} alt="Asterisk" />
            </label>
            <input
              className={style.input_field + ' ' + style.input_field_visibility_on}
              type="password"
              required
            />
          </div>
          <div className={style.input_field_inner}>
            <label htmlFor="" className={style.input_field__label_text}>
              Подтвердите пароль <img src={image.src} alt="Asterisk" />
            </label>
            <input
              className={style.input_field + ' ' + style.input_field_visibility_off}
              type="password"
              required
            />
          </div>
        </form>
        <Link href="passwordupdate" className={style.btn}>
          Поменять
        </Link>
      </section>
    </Layout>
  );
};

export default NewPassword;
