import { FC } from 'react';
import Logo from "@/components/layout/header/logo/logo";


import style from './swatchLine.module.sass';

const SwatchLine: FC = () => {
    return (

        <div className={style.main}>
            <div >
                <img src="./paidRecording/swatch.png" className={style.lineFirst}/>
            </div>
            <div className={style.fdfd}>
                <img src="./paidRecording/swatchGray.png" className={style.lineSecond}/>
                <div className={style.logo} >
                    <img src="./paidRecording/logo.svg"/>
                </div>
            </div>
        </div>
    );
};
export default SwatchLine;