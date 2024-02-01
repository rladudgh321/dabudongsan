import AddInfo from '@/components/admins/LandList/AddInfo';
import DetailInfo from '@/components/admins/LandList/DetailInfo';
import LandDefaultInfo from '@/components/admins/LandList/LandDefaultInfo';
import LandInfo from '@/components/admins/LandList/LandInfo';
import LocationInfo from '@/components/admins/LandList/LocationInfo';
import Pictures from '@/components/admins/LandList/Pictures';
import AppLayout from '@/layout/AppLayout';
import BackLayout from '@/layout/BackLayout';

const LandListId = () => {
  return (
    <>
      <AppLayout>
        <BackLayout>
          <LocationInfo />
          <LandInfo />
          <LandDefaultInfo />
          <AddInfo />
          <DetailInfo />
          <Pictures />
        </BackLayout>
      </AppLayout>
    </>
  );
}

export default LandListId;