import { GetServerSideProps, NextPage } from 'next';
import Link from 'next/link';

import Layout from '@/components/layout/Layout';

import style from './authorization.module.sass';
import { AuthService } from '@/services/auth.service';

const SignIn: NextPage<any> = ({ data }) => {
  console.log(data);

  return (
    <Layout title="Войти в аккаунт">
      <section className={style.login_page}>
        <h1 className={style.title}>вOйти</h1>
        <form action="">
          <input className={style.input_field} type="tel" placeholder="Номер телефона *" required />
          <input className={style.input_field} type="password" placeholder="Пароль *" required />
        </form>
        <a href="#" className={style.btn + ' ' + style.btn_bg_white}>
          вOйти
        </a>
        <div>
          <p className={style.login_page__links}>
            <Link href="/authorization/passwordrecovery" className={style.link_btn}>
              Забыли пароль?
            </Link>
            <span>
              У вас нет аккаунта?{' '}
              <Link href="/authorization/registration" className={style.link_btn}>
                Создать
              </Link>
            </span>
          </p>
        </div>
      </section>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps<any> = async () => {
  const data = await AuthService.getAuthData();
  return {
    props: { data },
  };
};
export default SignIn;
