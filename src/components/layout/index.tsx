import React, { ReactNode } from 'react';

import { Footer } from './Footer';
import { Meta } from './Meta';
import { NavBar } from './NavBar';

type LayoutProps = {
  children: ReactNode;
};

export const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <NavBar />
      <Meta />
      {children}
      <Footer />
    </>
  );
};
