import { useState, FC } from 'react';

import style from './accordion.module.sass';
import CircleArrow from '@/components/other/circleArrow/circleArrow';

interface AccordionItem {
  title: string;
  description: string;
  type: string;
  id: number;
}

const Accordion: FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const onItemClick = (index: number): void => {
    if (index === activeIndex) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };
  const items: AccordionItem[] = [
    {
      title: 'Лучшая ткань для хиджаба?',
      description:
        'О красивой коже мечтает каждый. Мы готовы на все, лишь бы достичь идеала. Но достаточно несколько простых шагов',
      type: 'Проблемная кожа',
      id: 0,
    },
    {
      title: 'Лучшая ткань для хиджаба?',
      description:
        'О красивой коже мечтает каждый. Мы готовы на все, лишь бы достичь идеала. Но достаточно несколько простых шагов',
      type: 'Проблемная кожа',
      id: 1,
    },
    {
      title: 'Лучшая ткань для хиджаба?',
      description:
        'О красивой коже мечтает каждый. Мы готовы на все, лишь бы достичь идеала. Но достаточно несколько простых шагов',
      type: 'Проблемная кожа',
      id: 2,
    },
  ];
  return (
    <div className={style.accordion}>
      {items.map(({ title, description, type, id }): any => (
        <div className={style.item} key={id} onClick={() => onItemClick(id)}>
          <div className={style.column}>
            <div className={style.text}>
              <div className={style.type__mobile}>{type}</div>
              <div className={style.title + ' ' + (activeIndex === id ? style.title_active : '')}>
                <h3>{title}</h3>
                <div
                  className={
                    style.circle + ' ' + (activeIndex === id ? style.active : style.hidden)
                  }>
                  <CircleArrow sizeCircle="48px" sizeImg="32px" color="var(--primary-500)" />
                </div>
              </div>

              <div
                className={
                  style.description + ' ' + (activeIndex === id ? style.active : style.hidden)
                }>
                {description}
              </div>
            </div>
          </div>
          <div className={style.column + ' ' + (activeIndex === id ? style.active : style.hidden)}>
            <div className={style.image}></div>
          </div>
          <div className={style.column}>
            <div className={style.type}>{type}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
