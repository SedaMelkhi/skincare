import { NextPage } from 'next';
import Link from 'next/link';
import withAuth from '@/components/withAuth';
import Layout from '@/components/layout/Layout';

import image from './../../../public/images/swatch-3.svg';

import style from './authorization.module.sass';

const NumberConfirmed: NextPage = () => {
  return (
    <Layout title="Подтверждение номера">
      <section className={style.tel_confirmed_page}>
        <img src={image.src} alt="Swatch" className={style.tel_confirmed_page__swatch} />
        <h1 className={style.title}>новый Aккаунт</h1>
        <p className={style.subtitle}>Номер телефона успешно подтверждён!</p>
        <Link href="/catalog/70" className={style.btn + ' ' + style.btn_margin}>
          Продолжить покупки
        </Link>
      </section>
    </Layout>
  );
};

export default withAuth(NumberConfirmed);
