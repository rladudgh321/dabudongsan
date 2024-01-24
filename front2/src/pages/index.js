import Contact from '@/components/index/Contact';
import IfLandType from '@/components/index/IfLandType';
import Institue from '@/components/index/Institue';
import MainPicture from '@/components/index/MainPicture';
import QuickSale from '@/components/index/QuickSale';
import RecentlyLand from '@/components/index/RecentlyLand';
import RecommedLand from '@/components/index/RecommedLand';
import SearchMapList from '@/components/index/SearchMapList';
import WhatTypeLand from '@/components/index/WhatTypeLand';
import AppLayout from '@/layout/AppLayout';


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