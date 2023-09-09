import { NextPage } from 'next';
import Link from 'next/link';

import Layout from '@/components/layout/Layout';

import style from './authorization.module.sass';

const PassworRecovery: NextPage = () => {
  return (
    <Layout title="Забыли пароль">
      <section className={style.restore_password_page}>
        <h1 className={style.title2}>Восстановить пароль</h1>
        <div className={style.btns2}>
          <Link href="email" className={style.btn2}>
            Через электронную почту
          </Link>
          <Link href="phone" className={style.btn2}>
            Через номер телефона
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default PassworRecovery;
