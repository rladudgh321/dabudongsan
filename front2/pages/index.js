import React from 'react';
import AppLayout from '../components/AppLayout';
import MainPicture from '../mainPage/mainPicture';
import SearchMapList from '../mainPage/SearchMapList';
import WhatTypeLand from '../mainPage/WhatTypeLand';
import IfLandType from '../mainPage/IfLandType';
import RecommedLand from '../mainPage/RecommedLand';

const Home = () => {
  return (
    <>
      <AppLayout>
        <MainPicture />
        <SearchMapList />
        <WhatTypeLand />
        <IfLandType />
        <RecommedLand />
      </AppLayout>
    </>
  );
}

export default Home;

/*
메인 사진
지도목록검색
whatTypeLand
Ifland

*/