import { FC, PropsWithChildren } from 'react';
import Meta from '../seo/Meta';
import { IMeta } from '../seo/meta.interface';
import Header from './header/header';
import Footer from './footer/footer';

const Layout: FC<PropsWithChildren<IMeta>> = ({ children, title, description }) => {
  return (
    <>
      <Meta
        title={title.length > 15 ? title.substring(0, 15) + '...' : title}
        description={description}
      />
      <Header />
      {children}
      <Footer />
    </>
  );
};
export default Layout;
