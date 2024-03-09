import { FC } from 'react';

import style from './breadcrumbs.module.sass';
import Link from 'next/link';

interface BreadcrumbItem {
  text: string;
  link: string;
}

interface BreadcrumbsProps {
  arr: BreadcrumbItem[];
}

const Breadcrumbs: FC<BreadcrumbsProps> = ({ arr }) => {
  return (
    <div className={style.breadcrumbs}>
      {arr.map(({ text, link }, i) => (
        <Link href={link} className={style.item} key={i}>
          {text + (i < arr.length - 1 ? ' / ' : '')}
        </Link>
      ))}
    </div>
  );
};

export default Breadcrumbs;
