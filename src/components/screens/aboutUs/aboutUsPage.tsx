import {FC} from 'react';
import style from './aboutUsPage.module.sass';
import Layout from '@/components/layout/Layout';
import AboutUsDescription from "@/components/screens/aboutUs/aboutUsDescription/aboutUsDescription";

import MissionSkinCare from "@/components/screens/aboutUs/mission/mission";
import ExpertsSkinCare from "@/components/screens/aboutUs/experts/experts";
import ShopSkinCare from "@/components/screens/aboutUs/shopSkinCare/shopSkinCare";

import CareTips from "@/components/screens/aboutUs/careTips/careTips";
import AboutUsExperts from "@/components/screens/aboutUs/aboutUsExperts/aboutUsExperts";

const AboutUsPage: FC = () => {
    return (
        <Layout title="О нас">
            <div className={style.description}>
                <AboutUsDescription/>

            </div>
            <div>
                <MissionSkinCare/>

            </div>
            <div className={style.experts}><ExpertsSkinCare/></div>
            <div><AboutUsExperts/></div>

            <div className={style.shopSkinCare}><ShopSkinCare/></div>
            <div className={style.careTips}><CareTips/></div>

        </Layout>
    );
};

export default AboutUsPage;
