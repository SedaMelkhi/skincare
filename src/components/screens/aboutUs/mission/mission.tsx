import {FC} from 'react';
import style from './Mission.module.sass';


const MissionSkinCare: FC = () => {
    return (
        <div className="wrap">
            <div className={style.container}>
            <div className={style.left}>
                <div className={style.icon}></div>
                <p className={style.text}>
                    Наша миссия — это создание коммьюнити осознанных женщин, которые уделяют внимание своей красоте,
                    здоровью и интеллекту.
                </p>
                <p className={style.author}>косметолог-эстетист и Основатель <br/> skincare agents, СОНЯ</p></div>
            <div className={style.right}>
                <div className={style.img}>
                </div>
            </div>
            </div>
        </div>


    );
};

export default MissionSkinCare;
