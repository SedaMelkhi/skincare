import { NextPage } from 'next';
import withAuth from '@/components/withAuth';

import HistoryPurchasesPage from './../../components/screens/historyPurchases/historyPurchasesPage';

const HistoryPurchases: NextPage = () => {
  return <HistoryPurchasesPage />;
};

export default withAuth(HistoryPurchases);
