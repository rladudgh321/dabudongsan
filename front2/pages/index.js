import React from 'react';
import AppLayout from '../components/AppLayout';
import MainPicture from '@/mainPage/MainPicture';
import SearchMapList from '../mainPage/SearchMapList';
import WhatTypeLand from '../mainPage/WhatTypeLand';
import IfLandType from '../mainPage/IfLandType';
import RecommedLand from '../mainPage/RecommedLand';
import QuickSale from '../mainPage/QuickSale';
import RecentlyLand from '../mainPage/RecentlyLand';
import Contact from '../mainPage/Contact';
import Institue from '../mainPage/Institue';

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
      </AppLayout>
    </>
  );
}

export default Home;