import {FC} from 'react';
import Layout from '@/components/layout/Layout';
import DescriptionRecord from "@/components/screens/paidRecording/descriptionRecord/descriptionRecord";
import Care from "@/components/screens/paidRecording/care/care";
import Reviews from "@/components/screens/paidRecording/reviews/Reviews"
import Faq from "@/components/screens/paidRecording/faq/Faq";
import Record from "@/components/screens/paidRecording/record/record";
import style from "././paidRecording.module.sass"
import PaidRecordingConsultation
    from "@/components/screens/paidRecording/paidRecordingConsultation/paidRecordingConsultation";
import SwatchLine from "@/components/screens/paidRecording/swatchLine/swatchLine";
import CareSkinSolution from "@/components/screens/paidRecording/careSkinSolution/careSkinSolution";
import ConsultationTerms from "@/components/screens/paidRecording/consultationTerms/consultationTerms";
import AboutUsPage from "@/components/screens/aboutUs/aboutUsPage";
import OurAgents from "@/components/screens/paidRecording/ourAgents/ourAgents";
import OtherServices from "@/components/screens/paidRecording/otherServices/otherServices";


const PaidRecordingPage: FC = () => {
    return (

        <Layout title="платная запись">
            <div>
                <DescriptionRecord/>
            </div>
            <div className={style.recording}>
                <PaidRecordingConsultation/>
            </div>
            <div className={style.swatch}><SwatchLine/></div>
            <div className={style.careSkinSolution}><CareSkinSolution/></div>
            <div className={style.terms}><ConsultationTerms/></div>
            <div  className={style.ourAgents}><OurAgents/></div>
            <div className={style.care}><Care/></div>
            <div className={style.reviews}> <Reviews/></div>
            <div className={style.faq}><Faq/></div>

            <div className={style.record}> <Record/></div>
            <div className={style.otherServices}> <OtherServices/></div>
            <AboutUsPage/>






        </Layout>

    )
        ;
};

export default PaidRecordingPage;
