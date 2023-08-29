import { FC } from 'react';

import style from './about.module.sass';

const About: FC = () => {
  return (
    <div className="wrap">
      <div className={style.about}>
        <div className={style.title}>
          <div>прозрачность, </div>
          <div>осознанность и подход</div>
          <div>смарт-бьюти.</div>
        </div>
        <div className={style.images}>
          <div>
            <img src="./about/1.png" alt="" className={style.img__one} />
          </div>
          <div>
            <img src="./about/2.png" alt="" className={style.img__two} />
          </div>
        </div>
        <div className={style.title}>
          <div>Мы верим в то, что забота</div>
          <div>о себе должна быть</div>
          <div>как внешней,</div>
          <div>так и внутренней.</div>
        </div>
        <div>
          <img src="./about/3.png" alt="" className={style.img__three} />
        </div>
      </div>
      <div className={style.btn}>
        <span>познакомимся поближе?</span>
        <div className={style.circle}>
          <img src="./arrowCircle.svg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default About;
