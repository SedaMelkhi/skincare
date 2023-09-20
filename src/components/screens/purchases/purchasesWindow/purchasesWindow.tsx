import { FC, useEffect, useRef, useState } from 'react';

import Window from '@/components/other/window/window';
import Address from '@/components/other/address/address';
import DeliveryDate from '@/components/other/deliveryDate/deliveryDate';
import SmallProducts from '@/components/other/smallProducts/smallProducts';
import ProductLine from '@/components/other/productLine/productLine';

import image from './../../../../../public/hits/1.png';

import style from './purchasesWindow.module.sass';

interface PurchasesWindowProps {
  title: string;
  price: number;
  status: 'waiting' | 'paid';
}

const PurchasesWindow: FC<PurchasesWindowProps> = ({ title, price, status }) => {
  const products = [
    {
      image: image.src,
      link: '/',
      id: 0,
    },
    {
      image: image.src,
      link: '/',
      id: 1,
    },
    {
      image: image.src,
      link: '/',
      id: 2,
    },
    {
      image: image.src,
      link: '/',
      id: 3,
    },
    {
      image: image.src,
      link: '/',
      id: 4,
    },
    {
      image: image.src,
      link: '/',
      id: 5,
    },
  ];
  const [isOpen, setIsOpen] = useState(false);
  const [height, setHeight] = useState('0');
  const [overflow, setOverflow] = useState('hidden');
  const contentHeight = useRef<HTMLDivElement | null>(null);
  const [isLoad, setIsLoad] = useState(true);

  useEffect(() => {
    if (contentHeight.current && isOpen) {
      setHeight(isOpen ? `${contentHeight.current.scrollHeight}px` : '0px');
      setIsLoad((prev) => !prev);
      let time = contentHeight.current.scrollHeight;
      setTimeout(() => {
        setOverflow('visible');
        setIsLoad((prev) => !prev);
      }, time);
    }
    if (!isOpen) {
      setHeight((prev) => prev);
      setTimeout(() => setHeight('0'), 50);
      setOverflow('hidden');
    }
  }, [isOpen]);

  return (
    <Window title={title} price={price} status={status} setIsOpen={setIsOpen} isLoad={isLoad}>
      <div className={style.content}>
        <div className={style.flex}>
          <div className={isOpen ? style.left_flex : style.left}>
            <div className={style.address}>
              <Address
                link="https://maps.app.goo.gl/9f6feVpgEker5Rh87"
                text="г. Грозный, проспект Мухаммеда Али, д 2А"
              />
            </div>
            <DeliveryDate text="с 16 по 18 июля включительно" />
          </div>
          <div className={isOpen ? style.right_hidden : style.right}>
            <SmallProducts products={products} setIsOpen={setIsOpen} />
          </div>
        </div>
        <div
          className={style.text}
          ref={contentHeight}
          style={{
            height: overflow === 'hidden' ? height : 'auto',
            overflow: overflow,
          }}>
          <ProductLine />
        </div>
      </div>
    </Window>
  );
};

export default PurchasesWindow;
