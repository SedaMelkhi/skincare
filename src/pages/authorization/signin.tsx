import { GetServerSideProps, NextPage } from 'next';
import { parsePhoneNumberFromString } from 'libphonenumber-js';
import { useState, useEffect } from 'react';
import { getTokenService } from '@/services/auth.service';

import Link from 'next/link';
import InputMask from 'react-input-mask';

import Layout from '@/components/layout/Layout';
import style from './authorization.module.sass';

const SignIn: NextPage<any> = ({ data }) => {
  console.log(data);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [phoneError, setPhoneError] = useState('');

  const handlePhoneChange = (event: any) => {
    const input = event.target.value;
    setPhoneNumber(input);

    const phone = parsePhoneNumberFromString(input, 'RU'); // Укажите здесь нужный регион
    if (!phone || !phone.isValid()) {
      setPhoneError('Введите действительный номер телефона.');
    } else {
      setPhoneError('');
    }
  };
  useEffect(() => {
    fetch(``, {
      credentials: 'include',
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error('Fetch error:', error);
      });
  }, []);
  return (
    <Layout title="Войти в аккаунт">
      <section className={style.login_page}>
        <h1 className={style.title}>войти</h1>
        <form action="">
          <InputMask
            mask="+7 (999) 999-99-99"
            maskChar={null}
            className={style.input_field + ' ' + (phoneError ? style.error_border : '')}
            type="tel"
            placeholder="Номер телефона *"
            required
            value={phoneNumber}
            onChange={handlePhoneChange}
          />
          {phoneError && <div className={style.error_message}>{phoneError}</div>}
          <input className={style.input_field} type="password" placeholder="Пароль *" required />
        </form>
        <a href="#" className={style.btn + ' ' + style.btn_bg_white}>
          войти
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
  const data = await getTokenService.getToken('dfsdf', 'sdfdsf');
  //localStorage.getItem('token');
  return {
    props: { data },
  };
};
export default SignIn;
