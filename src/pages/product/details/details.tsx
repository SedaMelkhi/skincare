import { FC } from 'react';

import style from './details.module.sass';

type DetailsData = {
  name: string;
  desc: string;
  id: number;
};
const Details: FC = () => {
  const data: DetailsData[] = [
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
  ];
  return (
    <div className={style.details}>
      {data.map(({ name, desc, id }) => (
        <div className={style.detail} key={id}>
          <div className={style.name}>
            <span>{name}</span> <div className={style.line}></div>
          </div>
          <div className={style.description}>{desc}</div>
        </div>
      ))}
    </div>
  );
};
export default Details;
