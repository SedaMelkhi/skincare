import {FC} from 'react';
import style from './Record.module.sass';

const Record: FC = () => {

    return (
        <div className="wrap">
            <div className={style.main}>
                <div className={style.img__big}>
                    <div className={style.img__small} ></div>
                </div>

                <div className={style.lines}>
                    <div className={style.line}></div>
                </div>

                <h3 className={style.label}>Начните ваш путь к здоровой коже сейчас!</h3>
                <div className={style.btn__main}>
                    <button className={style.btn}>записаться</button>
                </div>
                <h2 className={style.title}></h2>

            </div>
        </div>

    );
};
export default Record;