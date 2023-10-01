import {FC} from 'react';
import Layout from '@/components/layout/Layout';
import DescriptionRecord from "@/components/screens/paidRecording/descriptionRecord/descriptionRecord";
import Care from "@/components/screens/paidRecording/care/care";
import Reviews from "@/components/screens/paidRecording/reviews/Reviews"
import FAQ from "@/components/screens/paidRecording/faq/FAQ";


const PaidRecordingPage: FC = () => {
    return (
        <>
            <Layout title="платная запись">
                <div>
                    <DescriptionRecord/>
                    <Care/>
                    <FAQ/>

                </div>
            </Layout>
        </>
    );
};

export default PaidRecordingPage;
