import PurchasesPage from '@/components/screens/purchases/purchasesPage';
import withAuth from '@/components/withAuth';
import { NextPage } from 'next';

const Purchases: NextPage = () => {
  return <PurchasesPage />;
};

export default withAuth(Purchases);
