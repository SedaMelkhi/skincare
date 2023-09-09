import { NextPage } from 'next';
import Link from 'next/link';

import Layout from '@/components/layout/Layout';

import style from './authorization.module.sass';

const Phone: NextPage = () => {
  return (
    <Layout title="Забыли пароль">
      <section className={style.restore_password_page}>
        <h1 className={style.title2}>Восстановить пароль</h1>
        <div className={style.btns2}>
          <Link href="email " className={style.btn2}>
            Через электронную почту
          </Link>
          <Link href="phone" className={style.btn2 + ' ' + style.btn2_active}>
            Через номер телефона
          </Link>
        </div>
        <p className={style.subtitle + ' ' + style.subtitle_margin}>
          Мы отправим вам код для восстановления пароля через SMS.
        </p>
        <form action="">
          <input
            className={style.input_field}
            type="tel"
            placeholder="Номер телефона *;"
            required
          />
        </form>
        <Link href="smscode" className={style.btn}>
          Отправить
        </Link>
      </section>
    </Layout>
  );
};

export default Phone;
