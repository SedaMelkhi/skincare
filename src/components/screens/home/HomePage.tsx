import { FC, useState, useEffect, useRef } from 'react';
import Link from 'next/link';

import Layout from '@/components/layout/Layout';
import Header from './header/header';
import Categories from './categories/categories';

import News from './news/news';
import Sets from './sets/sets';

import style from './Home.module.sass';
import Hits from './hits/Hits';
import Experts from './experts/experts';
import Journal from './jourmal/journal';
import Present from './present/presemt';
import About from './about/about';

const HomePage: FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const section = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const checkVisibility = () => {
      if (section.current) {
        const rect = section.current.getBoundingClientRect();
        const halfHeight = (section.current.offsetHeight - 200) / 2;

        if (
          rect.top <= window.innerHeight - halfHeight &&
          rect.bottom >= halfHeight &&
          rect.bottom > 0
        ) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      }
    };
    window.addEventListener('scroll', checkVisibility);
    return () => {
      window.removeEventListener('scroll', checkVisibility);
    };
  }, []);
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
        <div ref={section} className={style.pinkMarqueeWrap}>
          <Sets isVisible={isVisible} />
          <Hits />
        </div>
        <Experts />
        <Journal />
        <Present />
        <About />
      </main>
    </Layout>
  );
};

export default HomePage;
