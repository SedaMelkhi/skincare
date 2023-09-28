import { FC, useState, useEffect, useRef } from 'react';
import Link from 'next/link';

import Layout from '@/components/layout/Layout';
import Header from './header/header';
import Categories from './categories/categories';

import News from './news/news';
import Sets from './sets/sets';
import Hits from './hits/Hits';
import Experts from './experts/experts';
import Journal from './jourmal/journal';
import Present from './present/presemt';
import About from './about/about';
import Footer from '@/components/layout/footer/footer';
import { ContactsArray } from '@/interfaces/contact.interface';

import style from './Home.module.sass';

const HomePage: FC<{ data: ContactsArray }> = ({ data }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isVisibleSticker, setIsVisibleSticker] = useState(false);
  const section = useRef<HTMLDivElement | null>(null);
  const sticker = useRef<HTMLDivElement | null>(null);
  const img = useRef<HTMLImageElement | null>(null);
  const rotate = useRef(0);
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

      if (sticker.current) {
        const rect = sticker.current.getBoundingClientRect();
        // const halfHeight = sticker.current.offsetHeight;
        // console.log(rect.top, window.innerHeight - halfHeight);
        console.log(window.document.body.scrollHeight - rect.top);

        if (rect.top < 600 && window.document.body.scrollHeight + rect.top > 3000) {
          setIsVisibleSticker(true);
          if (img.current) {
            img.current.style.transform = `rotate(${rotate.current}deg)`;
            rotate.current = -rect.top / 15;
          }
        } else {
          setIsVisibleSticker(false);
        }
      }
    };
    window.addEventListener('scroll', checkVisibility);
    return () => {
      window.removeEventListener('scroll', checkVisibility);
    };
  }, []);
  return (
    <>
      <Layout title="Главная" description="Онлайн магазин косметики">
        <Header />
        <main ref={sticker}>
          <Categories />
          <div className="wrap">
            {isVisibleSticker && (
              <Link href="/" className={style.sticker__wrap}>
                <img src="./sticker.png" alt="" className={style.sticker} ref={img} />
              </Link>
            )}
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
    </>
  );
};

export default HomePage;
