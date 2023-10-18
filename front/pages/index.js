import React from 'react';
import AppLayout from '../components/AppLayout';

const Home = ({children}) => {
  return (
    <>
      <AppLayout>{children}</AppLayout>
    </>
  );
}

export default Home;