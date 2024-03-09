import withAuth from '@/components/withAuth';
import MapsPage from './../../components/screens/maps/mapsPage';
import { NextPage } from 'next';

const Maps: NextPage = () => {
  return <MapsPage />;
};

export default withAuth(Maps);
