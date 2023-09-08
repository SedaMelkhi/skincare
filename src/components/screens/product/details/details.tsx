import { FC } from 'react';

import style from './details.module.sass';

type DetailData = {
  name: string;
  desc: string;
  id: number;
};
type arrDetailProps = {
  detailsData: DetailData[];
};
const Details: FC<arrDetailProps> = ({ detailsData }) => {
  return (
    <div className={style.details}>
      {detailsData.map(({ name, desc, id }) => (
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
