import {FC} from 'react';
import style from './FAQ.module.sass';

const Care: FC = () => {
    return (
        <div className={style.bg}>
            <div className="wrap">
                <div>
                    <div>
                        <h2 className={style.title}>остались вопросы?</h2>
                        <p className={style.text}>Вот ответы на самые частые из них.</p></div>
                    <img />
                    <div className={style.circle}>
                        <div className={style.circle__big}></div>
                        <div className={style.circle__small}></div>
                    </div>
                </div>
                <div className={style.borders}>
                    <div className={style.border}>
                        <div>
                            <h3 className={style.border__title}>до советов агентов:(</h3>
                            <div className={style.border__input}></div>
                        </div>
                    </div>
                    <div className={style.border}>
                        <div>
                            <h3 className={style.border__title}>до советов агентов:(</h3>
                            <div className={style.border__input}></div>
                        </div>
                    </div>
                    <div className={style.border}>
                        <div>
                            <h3 className={style.border__title}>до советов агентов:(</h3>
                            <div className={style.border__input}></div>
                        </div>
                    </div>
                    <div className={style.border}>
                        <div>
                            <h3 className={style.border__title}>до советов агентов:(</h3>
                            <div className={style.border__input}></div>
                        </div>
                    </div>
                    <div className={style.border}>
                        <div>
                            <h3 className={style.border__title}>до советов агентов:(</h3>
                            <div className={style.border__input}></div>
                        </div>
                    </div>
                    <div className={style.border}>
                        <div>
                            <h3 className={style.border__title}>до советов агентов:(</h3>
                            <div className={style.border__input}></div>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    );
};
export default Care;