import { FC, useEffect, useRef, useState } from 'react';

import Window from '@/components/other/window/window';
import AccordionBody from './accordionBody/accordionBody';
import AccordionHeader from './accordionHeader/accordionHeader';

import style from './accordion.module.sass';

interface AccordionProps {
  title: string;
  price: number;
  status?: 'waiting' | 'paid';
  date?: string;
}

const Accordion: FC<AccordionProps> = ({ title, price, status, date }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [height, setHeight] = useState('0');
  const [overflow, setOverflow] = useState<'hidden' | 'visible'>('hidden');
  const bodyElement = useRef<HTMLDivElement | null>(null);
  const timerId = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (bodyElement.current && isOpen) {
      setHeight(isOpen ? `${bodyElement.current.scrollHeight}px` : '0px');

      let time = bodyElement.current.scrollHeight * 1.5;
      timerId.current = setTimeout(() => {
        setOverflow('visible');
      }, time);
    }
    if (!isOpen) {
      if (timerId.current) {
        clearTimeout(timerId.current);
      }

      setHeight((prev) => prev);
      setTimeout(() => setHeight('0'), 50);
      setOverflow('hidden');
    }
  }, [isOpen]);

  return (
    <Window title={title} price={price} status={status} setIsOpen={setIsOpen} date={date}>
      <div className={style.content}>
        <AccordionHeader isOpen={isOpen} setIsOpen={setIsOpen} />
        <AccordionBody bodyElement={bodyElement} overflow={overflow} height={height} />
      </div>
    </Window>
  );
};

export default Accordion;
