import {FC, useState} from 'react';
import style from './Record.module.sass';

const Record: FC = () => {

    return (
        <div className="wrap">
            <div className={style.main}>
                <div className={style.img__big}></div>
                <div className={style.img__small}></div>
                <div className={style.lines}>
                    <div className={style.line}></div>
                </div>
                <h3>Начните ваш путь к здоровой коже сейчас!</h3>
                <button>записаться</button>
                <h2 className={style.title}></h2>
                <div>
                    <div className={style.border}>
                        <p className={style.text}>Подберите себе уход с нашими агентами бесплатно.</p>
                        <div><a>Подробнее о бесплатной консультации</a>
                            <div></div>
                        </div>
                    </div>
                    <div className={style.rhomb}></div>
                    <div className={style.recording}>
                        <h3></h3>
                        <button></button>
                    </div>
                </div>


            </div>
        </div>

    );
};
export default Record;