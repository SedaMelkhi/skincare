import {FC} from 'react';
import style from './DescriptionRecord.module.sass';


const DescriptionRecord: FC = () => {

    return (
        <div>
            <div className="wrap">
                <div className={style.main}>
                    <div className={style.circle}>
                        <div className={style.circle__big}></div>
                        <div className={style.circle__small}></div>
                    </div>
                    <div className={style.left}>
                        <div className={style.block}></div>
                        <div>
                            <div className={style.title}>
                                Skin Solution, <br/>глубокий<br/> подход.
                            </div>
                        </div>

                    </div>
                    <div className={style.right}>
                        <div className={style.text}>
                            <div>Skin Solution объединяет экспертизу врача эндокринолога и косметолога.
                            </div>
                            <div>Здесь вы получите профессиональную помощь в решении проблем с кожей и нутриционные
                                рекомендации
                                для достижения здоровья изнутри.
                            </div>
                        </div>
                        <div className={style.btn}>
                            <button className={style.button}>Записаться</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className={style.lineMain}>
                <div className={style.line}>
                </div>
            </div>

            <div>
            </div>
        </div>
    )
        ;
};

export default DescriptionRecord;