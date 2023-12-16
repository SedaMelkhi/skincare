import { NextPage } from 'next';
import withAuth from '@/components/withAuth';

import FavoritePage from './../../components/screens/favorite/favoritePage';

const Favorite: NextPage = () => {
  return <FavoritePage />;
};

export default withAuth(Favorite);
