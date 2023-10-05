import React from 'react';
import AppLayout from '../components/AppLayout';
import MainPicture from '../mainPage/mainPicture';
import SearchMapList from '../mainPage/SearchMapList';
import WhatTypeLand from '../mainPage/WhatTypeLand';
import IfLandType from '../mainPage/IfLandType';
import RecommedLand from '../mainPage/RecommedLand';
import QuickSale from '../mainPage/QuickSale';
import RecentlyLand from '../mainPage/RecentlyLand';
import Contact from '../mainPage/Contact';
import Institue from '../mainPage/Institue';
import Footer from '../mainPage/Footer';

const Home = () => {
  return (
    <>
      <AppLayout>
        <MainPicture />
        <SearchMapList />
        <WhatTypeLand />
        <IfLandType />
        <RecommedLand />
        <QuickSale />
        <RecentlyLand />
        <Contact />
        <Institue />
        <Footer />
      </AppLayout>
    </>
  );
}

export default Home;