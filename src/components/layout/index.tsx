import React, { ReactNode } from 'react';
import Footer from './Footer';
import Meta from './Meta';
import NavBar from './NavBar';

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <NavBar mb={24}/>
      <Meta />
      {children}
      <Footer mt={24}/>
    </>
  );
};

export default Layout;
