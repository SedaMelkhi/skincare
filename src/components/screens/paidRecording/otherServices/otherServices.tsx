import {FC} from 'react';
import style from './OtherServices.module.sass';

const OtherServices: FC = () => {

    return (
        <div className="wrap">
            <div><h2 className={style.title}>Познакомьтесь с нашими Другими услугами</h2></div>
            <div className={style.container}>
                <div className={style.row1}>
                    <div className={style.subtitle__main}><h3 className={style.subtitle1}>Бесплатная консультация</h3></div>
                    <div className={style.rhomb1}></div>

                    <div className={style.borderMain}>
                        <div className={style.border1}>

                            <div className={style.text}>Подберите себе уход с нашими агентами бесплатно.</div>
                            <div className={style.text__link}><a className={style.link1}>Подробнее о бесплатной
                                консультации</a>
                                <div className={style.svg1}></div>
                            </div>

                        </div>
                    </div>
                    <div className={style.btn__main}>
                        <button className={style.btn1}>Записаться</button>
                    </div>

                </div>
                <div className={style.row2}>
                    <div className={style.subtitle__main}><h3 className={style.subtitle2}>Beauty pro</h3></div>
                    <div className={style.rhomb2}></div>

                        <div className={style.borderMain}>
                            <div className={style.border2}>

                                <div className={style.text}>При платной консультации косметолог проведёт анализ вашей
                                    кожи.
                                </div>
                                <div className={style.text__link}><a className={style.link2}>Подробнее о Beauty Pro</a>
                                    <div className={style.svg2}></div>
                                </div>

                            </div>
                        </div>
                        <div className={style.btn__main}>
                            <button className={style.btn2}>Записаться</button>
                        </div>

                </div>
                <div className={style.letters}>
                    <img src="./paidRecording/d.png" className={style.d}/>
                    <img src="./paidRecording/t.png" className={style.t}/>
                    <img src="./paidRecording/m.png" className={style.m}/>
                </div>
            </div>
        </div>

    );
};
export default OtherServices;