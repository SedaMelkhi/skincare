import { FC } from 'react';

import filtersSvg from './../../../../public/catalog/filters.svg';

import RangeSlider from '../rangeSlider/rangeSlider';
import { StyledEngineProvider } from '@mui/material';

import Filter from './filter/filter';

import style from './filters.module.sass';

const Filters: FC = () => {
  return (
    <div className={style.filters}>
      <div className={style.wrap}>
        <span className={style.text}>фильтры</span>
        <img src={filtersSvg.src} alt="" />
      </div>
      <aside className={style.aside}>
        <div className={style.line}>
          <span>Cо скидкой</span>
          <label className={style.switch}>
            <input type="checkbox" className={style.input} />
            <span className={`${style.slider} ${style.round}`}></span>
          </label>
        </div>
        <div className={`${style.title} ${style.title_grey}`}>Цена</div>

        <StyledEngineProvider injectFirst>
          <RangeSlider />
        </StyledEngineProvider>
        <Filter
          name="тип кожи"
          items={['Жирная', 'Комбинированная', 'Сухая', 'Нормальная', 'Все типы']}
        />
        <Filter
          name="Состояние кожи"
          items={[
            'Возрастные изменения',
            'Купероз',
            'Обезвоженная',
            'Пигментация/постакне',
            'Поврежденная',
            'Акне/высыпания',
            'Розацеа',
            'Жирность кожи/расширенные поры',
            'Тусклый цвет лица',
            'Чувствительная',
          ]}
        />
        <Filter
          name="Бренд"
          items={[
            'ABIB',
            'A.G.E.STOP',
            'ALLIES OF SKIN',
            'ANESSA',
            'ANGIOPHARM',
            'ATOPALM',
            'AROMATICA',
            'BANILA CO',
            'BEAUTY OF JOSEON',
            'BLITHE',
            'BOTANITY',
            'BUENO',
            'BY WISHTREND',
            'CELIMAX',
            'CERACLINIC',
            'COSRX',
            'CURAPROX',
            'DAVINES',
            'DEAR,KLAIRS',
            'DPU',
            'DR.CEURACLE',
            'DR.ALTHEA',
            'EMMA HARDIE',
            'ETUDE HOUSE',
            'GENOSYS',
            'GUAM',
            'HEIMISH',
            'HEMPZ',
            'HERA',
            'HOLIFROG',
            'HUXLEY',
            'I’M FROM',
            'INVISI BOBBLE',
            'JANEKE',
            'JANE IREDALE',
            'JAN MARINI',
            'JSDERMA',
            'LAGOM',
            'LIZDA',
            'MANYO',
            'MARVIS',
            'MARY&MAY',
            'MEDI-PEEL',
            'PESTLE&MORTAR',
            'PHFORMULA',
            'PSA',
            'PUSY',
            'Q+A',
            'REAL BARRIER',
            'REAL TECHNIQUES',
            'REJUDICARE',
            'REVIDERM',
            'ROVECTIN',
            'SKIN&LAB',
            'SUNKILLER(ISEHAN)',
            'TANGLE TEEZER',
            'TIAM',
            'TOCOBO',
            'WELLDERMA',
          ]}
        />
        <Filter
          name="Компоненты"
          items={[
            'LHA кислота',
            'Азелаиновая кислота',
            'Альфа-липоевая кислота',
            'Арбутин',
            'Бензоилпероксид',
            'AHA кислоты',
            'Витамин Е',
            'Витамин К',
            'Витамин С',
            'Водоросли/Экстракты водорослей',
            'Гиалуроновая кислота',
            'Глутатион',
            'Зеленый чай',
            'Керамиды',
            'Койевая кислота',
            'Коллаген',
            'Коэнзим Q10',
            'Лактобионовая кислота (PHA)',
            'Масло жожоба',
            'Масло ши',
            'Ниацинамид',
            'Пантенол',
            'Пептиды/Факторы роста',
            'Полынь',
            'Про/пребиотики',
            'Прополис',
            'Ретинол',
            'Рисовый экстракт',
            'Ромашка/Азулен',
            'Салициловая кислота',
            'Сквалан',
            'Транексамовая кислота',
            'Физические фильтры',
            'Химические фильтры',
            'Центелла азиатская',
            'Цинк',
            'Чайное дерево',
            'Экстракт солодки',
          ]}
        />
        <Filter name="Тип продукта" items={['Пока яц']} />
        <Filter
          name="Эффект"
          items={[
            'Антибактериальный',
            'Антиэйдж ',
            'Восстановление барьера ',
            'Выравнивание рельефа ',
            'Защита от солнца ',
            'Лифтинг/повышение эластичности ',
            'Осветление/выравнивание тона ',
            'Посттравматический',
            'Себорегулирующий',
            'Сияние ',
            'Увлажнение ',
            'Успокаивающий',
            'Работа с порами',
          ]}
        />
      </aside>
    </div>
  );
};

export default Filters;
