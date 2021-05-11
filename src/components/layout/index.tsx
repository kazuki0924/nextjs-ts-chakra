import React, { ReactNode } from 'react';

import { Box } from '@chakra-ui/react';

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
      <Box pt="100px">{children}</Box>
      <Footer />
    </>
  );
};
