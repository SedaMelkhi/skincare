import { NextPage } from 'next';
import Link from 'next/link';

import Layout from '@/components/layout/Layout';

import image from './../../../public/images/swatch-4.svg';

import style from './authorization.module.sass';

const PasswordUpdate: NextPage = () => {
  return (
    <Layout title="Подтверждение номера">
      <section className={style.password_updated_page}>
        <img src={image.src} alt="Swatch" className={style.password_updated_page__swatch} />
        <h1 className={style.title2}>пароль обновлён!</h1>
        <Link href="/" className={style.btn}>
          Продолжить покупки
        </Link>
      </section>
    </Layout>
  );
};

export default PasswordUpdate;
