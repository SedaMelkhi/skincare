import { FC } from 'react';
import Link from 'next/link';

import Layout from '@/components/layout/Layout';
import Header from './header/header';
import Categories from './categories/categories';

import { Inter } from 'next/font/google';

import style from './Home.module.sass';
import News from './news/news';

const inter = Inter({ subsets: ['latin'] });
const HomePage: FC = () => {
  return (
    <Layout title="Главная" description="Онлайн магазин косметики">
      <Header />
      <main>
        <Categories />
        <div className="wrap">
          <Link href="/" className={style.sticker__wrap}>
            <img src="./sticker.png" alt="" className={style.sticker} />
          </Link>
        </div>
        <News />
      </main>
    </Layout>
  );
};

export default HomePage;
