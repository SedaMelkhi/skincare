import ProfilePage from '@/components/screens/profile/profilePage';
import withAuth from '@/components/withAuth';
import { NextPage } from 'next';

const Profile: NextPage = () => {
  return <ProfilePage />;
};

export default withAuth(Profile);
