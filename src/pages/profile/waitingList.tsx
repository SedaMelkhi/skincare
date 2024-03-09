import withAuth from '@/components/withAuth';
import WaitingListPage from './../../components/screens/waitingList/waitingListPage';
import { NextPage } from 'next';

const WaitingList: NextPage = () => {
  return <WaitingListPage />;
};

export default withAuth(WaitingList);
