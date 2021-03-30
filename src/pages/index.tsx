import dynamic from 'next/dynamic';
import React from 'react';

const BookTest = dynamic(() => import('../components/BookTest'), {
  ssr: false,
});

const Home = () => {
  return <BookTest />;
};

export default Home;
