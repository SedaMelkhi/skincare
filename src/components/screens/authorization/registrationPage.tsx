import { FC, useState } from 'react';
import Link from 'next/link';

import Layout from '@/components/layout/Layout';
//import { UserApi } from '@/services';

import style from './authorization.module.sass';

const RegistrationPage: FC = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');
  const sendData = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // if (password === password2) {
    //   const data = await UserApi.register({
    //     USER_LOGIN: phone,
    //     USER_NAME: name,
    //     USER_LAST_NAME: '',
    //     USER_PASSWORD: password,
    //     USER_CONFIRM_PASSWORD: password,
    //     site_id: false,
    //     captcha_word: '',
    //     captcha_sid: 0,
    //   });
    //   console.log(data);
    // } else {
    //   console.log('пароли не совпадают');
    // }
  };
  //href="/authorization/confirmed"
  return (
    <Layout title="Регистрация">
      <section className={style.sign_up_page}>
        <h1 className={style.title}>новый AкКаунт</h1>
        <form action="" onSubmit={sendData}>
          <input
            className={style.input_field}
            type="text"
            placeholder="Имя *"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            className={style.input_field}
            type="tel"
            placeholder="Номер телефона *"
            required
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <input
            className={style.input_field}
            type="password"
            placeholder="Придумайте пароль *"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            className={style.input_field}
            type="password"
            placeholder="Подтвердите пароль *"
            value={password2}
            onChange={(e) => setPassword2(e.target.value)}
            required
          />
          <button className={style.btn + ' ' + style.btn_bg_white + ' ' + style.btn_margin}>
            Создать аккаунт
          </button>
        </form>

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

export default RegistrationPage;
