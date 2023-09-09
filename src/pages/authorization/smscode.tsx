import { NextPage } from 'next';
import Link from 'next/link';

import Layout from '@/components/layout/Layout';

import style from './authorization.module.sass';

const SmsCode: NextPage = () => {
  return (
    <Layout title="Забыли пароль">
      <section className={style.restore_password_page}>
        <h1 className={style.title2}>Восстановить пароль</h1>
        <div className={style.btns2}>
          <Link href="email" className={style.btn2}>
            Через электронную почту
          </Link>
          <Link href="phone" className={style.btn2 + ' ' + style.btn2_active}>
            Через номер телефона
          </Link>
        </div>
        <p className={style.subtitle + ' ' + style.subtitle_margin}>
          Проверьте ваши SMS и введите код:
        </p>
        <form action="">
          <input className={style.input_field} type="password" placeholder="Код &ast;" required />
        </form>
        <Link href="newpassword" className={style.btn}>
          подтвердить
        </Link>
        <p className={style.cta + ' ' + style.cta_margin}>
          Не получили SMS? <a href="#">Поменять номер телефона</a> или
          <button>Отправить повторно</button> (через : 00:32 секунд)
        </p>
      </section>
    </Layout>
  );
};

export default SmsCode;
