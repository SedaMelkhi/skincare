import { FC, useState } from 'react';

import Details from '../details/details';

import arrowSvg from './../../../../public/arr.svg';

import style from './tabPanel.module.sass';

type TabPanelData = {
  name: string;
  text: string;
  id: number;
  details?: DetailsData[];
};

type DetailsData = {
  name: string;
  desc: string;
  id: number;
};
const TabPanel: FC = () => {
  const [activeTabId, setActiveTabId] = useState(0);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const onItemClick = (index: number): void => {
    if (index === activeIndex) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };
  const data: TabPanelData[] = [
    {
      name: 'Описание',
      text: `Активно освежающий шампунь SOLU глубоко очищает волосы и кожу головы, удаляя остатки стайлинговых продуктов. 
      Содержит экстракт гречихи из долины Вальтеллина, выращенной в рамках программы Slow Food Presidium. Формула насыщена антиоксидантами и минеральными солями, железом, цинком, селением и протеинами. Включает в себя все незаменимые аминокислоты в высокой концентрации: лизин, треонин, триптофан и аминокислоты. 
      Подходит для всех типов волос перед процедурами химической завивки или разглаживания.`,
      details: [
        {
          name: 'Бренд',
          desc: 'SOLU',
          id: 0,
        },
        {
          name: 'Производитель',
          desc: 'Россия',
          id: 1,
        },
        {
          name: 'Производитель',
          desc: 'Акне, пигментация, неровный тон, черные точки, расширенные поры, розацеа, купероз, тусклость, морщины',
          id: 2,
        },
        {
          name: 'Тип кожи',
          desc: 'Жирная, комбинированная, нормальная, проблемная, сухая, чувствительная',
          id: 3,
        },
      ],
      id: 0,
    },
    {
      name: 'применение',
      text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti rerum maiores, earum repellat velit obcaecati alias eos aperiam sunt. Nisi aut dolorum repellendus maiores quos omnis sunt vero ad error itaque, quidem cupiditate consectetur totam sint, provident amet! Enim laboriosam eum obcaecati consequuntur quo, est sequi assumenda libero totam quam aperiam iste esse adipisci consequatur, voluptates deserunt beatae cumque dolor, mollitia quas tempore fugiat minima!`,
      id: 1,
    },
    {
      name: 'состав',
      text: `Minima nam incidunt expedita voluptatem at aliquam eaque fugit consequuntur ipsam eligendi
      doloribus laboriosam, officia dignissimos nulla nostrum sunt distinctio dolores magni,
      consequatur exercitationem, illo cupiditate similique autem. Neque cum maiores, ratione
      numquam deleniti magnam!`,
      id: 2,
    },
    {
      name: 'о бренде',
      text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti rerum maiores, earum repellat velit obcaecati alias eos aperiam sunt. Nisi aut dolorum repellendus maiores quos omnis sunt vero ad error itaque, quidem cupiditate consectetur totam sint, provident amet! Enim laboriosam eum obcaecati consequuntur quo, est sequi assumenda libero totam quam aperiam iste esse adipisci consequatur, voluptates deserunt beatae cumque dolor, mollitia quas tempore fugiat minima!`,
      id: 3,
    },
    {
      name: 'дополнительно',
      text: `Minima nam incidunt expedita voluptatem at aliquam eaque fugit consequuntur ipsam eligendi
      doloribus laboriosam, officia dignissimos nulla nostrum sunt distinctio dolores magni,
      consequatur exercitationem, illo cupiditate similique autem. Neque cum maiores, ratione
      numquam deleniti magnam!`,
      id: 4,
    },
  ];

  return (
    <div>
      <div className={style.tabPanel}>
        <div className={style.tabs}>
          {data.map(({ name, id }) => (
            <div
              key={id}
              className={style.tab + ' ' + (activeTabId === id && style.active)}
              onClick={() => setActiveTabId(id)}>
              {name}
              <img src="" alt="" />
            </div>
          ))}
        </div>
        {data.map(({ text, id, details }) => (
          <div key={id} style={{ display: activeTabId === id ? 'block' : 'none' }}>
            <div className={style.text}>{text}</div>
            {details && <Details detailsData={details} />}
          </div>
        ))}
      </div>
      <div className={style.accordion}>
        {data.map(({ name, text, details, id }): any => (
          <div className={style.item} key={id} onClick={() => onItemClick(id)}>
            <div className={style.column}>
              <div className={style.text}>
                <div className={style.title}>
                  {name}
                  <img
                    src={arrowSvg.src}
                    alt=""
                    className={activeIndex === id ? style.rotate : ''}
                  />
                </div>
                <div
                  className={
                    style.description + ' ' + (activeIndex === id ? style.active : style.hidden)
                  }>
                  {text}
                  <div className={style.details}>
                    {details &&
                      details.map(({ name, desc, id }) => (
                        <div className={style.detailItem} key={id}>
                          <div className={style.title}>{name}</div>
                          <div className={style.detailDesc}>{desc}</div>
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TabPanel;
