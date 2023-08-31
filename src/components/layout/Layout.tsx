import { FC, PropsWithChildren } from 'react';
import Meta from '../seo/Meta';
import { IMeta } from '../seo/meta.interface';
import Header from './header/header';
import Footer from './footer/footer';

const Layout: FC<PropsWithChildren<IMeta>> = ({ children, title, description }) => {
  return (
    <>
      <Meta title={title} description={description} />
      <Header />
      {children}
      <Footer />
    </>
  );
};
export default Layout;
