import Recommand from '@/components/admins/Recommand';
import AppLayout from '@/layout/AppLayout';
import BackLayout from '@/layout/BackLayout';

const RecommandPage = () => {
  return (
    <>
      <AppLayout>
        <BackLayout>
          <Recommand />
        </BackLayout>
      </AppLayout>
    </>
  );
}

export default RecommandPage;