import LandList from '@/components/admins/LandList';
import AppLayout from '@/layout/AppLayout';
import BackLayout from '@/layout/BackLayout';

const LandListPage = () => {
  return (
    <AppLayout>
    <BackLayout>
      <LandList />
    </BackLayout>
    </AppLayout>
  );
}

export default LandListPage;