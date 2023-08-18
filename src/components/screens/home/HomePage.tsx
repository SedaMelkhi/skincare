import { Inter } from 'next/font/google';
import styles from './Home.module.sass';
import { FC } from 'react';
import Layout from '@/components/layout/Layout';
import Header from './header/header';

const inter = Inter({ subsets: ['latin'] });
const HomePage: FC = () => {
  return (
    <Layout title="Главная" description="Онлайн магазин косметики">
      <Header />
      <main></main>
    </Layout>
  );
};

export default HomePage;
