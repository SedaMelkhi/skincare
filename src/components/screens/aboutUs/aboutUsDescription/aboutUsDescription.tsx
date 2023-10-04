import {FC} from 'react';
import style from './AboutUsDescription.module.sass';
import Marquee from "react-fast-marquee";


const AboutUsDescription: FC = () => {
    return (
        <div className={style.main}>
            <div className="wrap">
                <div className={style.titleMain}>
                <h1 className={style.title}>
                    SkinCare Agents
                </h1></div>
                <div className={style.container}>
                    <div className={style.left}>
                    <div className={style.img}></div></div>
                    <div className={style.right}>
                        <div className={style.text}>бьюти-пространство, совмещающее в себе уход за телом, лицом,
                            волосами и
                            заботу о здоровье.
                        </div>
                        <div className={style.text__discription}>Мы собрали команду специалистов, которая каждый день с
                            2019-го года пополняет свой багаж знаний и помогает вам понять свой организм.
                        </div>
                        <div className={style.arrow}>
                            <div className={style.arrow__text}>миссия <br/>агентов</div>
                            <div className={style.arrow__border}><img src='./aboutUs/arrowDown.svg'
                                                                      className={style.arrow__svg}/></div>
                        </div>
                    </div>
                </div>
            </div>
            <Marquee className={style.marquee__wrap} speed={100}>
                <div className={style.marquee}>
                    <img src="./star.svg" alt=""/>
                    <div >здоровье</div>
                    <img src="./star.svg" alt=""/>
                    <div>осознанность</div>
                    <img src="./star.svg" alt=""/>
                    <div >красота</div>
                    <img src="./star.svg" alt=""/>
                    <div >ИНТЕЛЛЕКТ</div>
                </div>
            </Marquee></div>

    );
};

export default AboutUsDescription;
