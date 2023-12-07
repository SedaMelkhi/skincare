import { GetServerSideProps, NextPage } from 'next';
import Link from 'next/link';

import Layout from '@/components/layout/Layout';

import style from './authorization.module.sass';
import { GetTokenService } from '@/services/auth.service';
import { useEffect } from 'react';

const SignIn: NextPage<any> = ({ data }) => {
  // useEffect(() => {
  //   fetch(`/api/local/api/user.php`, {
  //     method: 'POST',
  //     credentials: 'include',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({
  //       type: 'getToken',
  //       pass: 'seda580890',
  //       phone: '89281112233',
  //     }),
  //   })
  //     .then((response) => {
  //       if (!response.ok) {
  //         throw new Error(`HTTP error! status: ${response.status}`);
  //       }
  //       return response.json();
  //     })
  //     .then((data) => {
  //       console.log(data);
  //     })
  //     .catch((error) => {
  //       console.error('Fetch error:', error);
  //     });
  // }, []);
  return (
    <Layout title="Войти в аккаунт">
      <section className={style.login_page}>
        <h1 className={style.title}>войти</h1>
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
  const data = await GetTokenService.getToken();
  //localStorage.getItem('token');
  return {
    props: { data },
  };
};
export default SignIn;
