import { NextPage } from 'next';
import Link from 'next/link';

import Layout from '@/components/layout/Layout';

import style from './authorization.module.sass';

const EmailSmsCode: NextPage = () => {
  return (
    <Layout title="Забыли пароль">
      <section className={style.restore_password_page}>
        <h1 className={style.title2}>Восстановить пароль</h1>
        <div className={style.btns2}>
          <Link href="email" className={style.btn2 + ' ' + style.btn2_active}>
            Через электронную почту
          </Link>
          <Link href="phone" className={style.btn2}>
            Через номер телефона
          </Link>
        </div>
        <p className={style.subtitle + ' ' + style.subtitle_margin}>
          Проверьте ваши письма и введите код. Проверьте папку "Спам", если письмо не найдено:
        </p>
        <form action="">
          <input className={style.input_field} type="password" placeholder="Код &ast;" required />
        </form>
        <Link href="newpassword" className={style.btn}>
          подтвердить
        </Link>
        <p className={style.cta + ' ' + style.cta_margin}>
          Не получили SMS?{' '}
          <Link href="email" className={style.link_btn}>
            Поменять адрес электронной почты
          </Link>{' '}
          или <button className={style.link_btn}>Отправить повторно</button> (через : 00:32 секунд)
        </p>
      </section>
    </Layout>
  );
};

export default EmailSmsCode;
