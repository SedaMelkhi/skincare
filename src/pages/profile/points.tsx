import withAuth from '@/components/withAuth';
import PointsPage from './../../components/screens/points/pointsPage';
import { NextPage } from 'next';

const Points: NextPage = () => {
  return <PointsPage />;
};

export default withAuth(Points);
