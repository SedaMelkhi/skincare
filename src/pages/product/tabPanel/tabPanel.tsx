import { FC, useState } from 'react';
import style from './tabPanel.module.sass';

type TabPanelData = {
  name: string;
  text: string;
  id: number;
};
const TabPanel: FC = () => {
  const [activeTabId, setActiveTabId] = useState(0);
  const data: TabPanelData[] = [
    {
      name: 'Описание',
      text: `Активно освежающий шампунь SOLU глубоко очищает волосы и кожу головы, удаляя остатки стайлинговых продуктов. 
      Содержит экстракт гречихи из долины Вальтеллина, выращенной в рамках программы Slow Food Presidium. Формула насыщена антиоксидантами и минеральными солями, железом, цинком, селением и протеинами. Включает в себя все незаменимые аминокислоты в высокой концентрации: лизин, треонин, триптофан и аминокислоты. 
      Подходит для всех типов волос перед процедурами химической завивки или разглаживания.`,
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
    <div className={style.tabPanel}>
      <div className={style.tabs}>
        {data.map(({ name, id }) => (
          <div
            key={id}
            className={style.tab + ' ' + (activeTabId === id && style.active)}
            onClick={() => setActiveTabId(id)}>
            {name}
          </div>
        ))}
      </div>
      {data.map(({ text, id }) => (
        <div
          key={id}
          className={style.text}
          style={{ display: activeTabId === id ? 'block' : 'none' }}>
          {text}
        </div>
      ))}
    </div>
  );
};

export default TabPanel;
