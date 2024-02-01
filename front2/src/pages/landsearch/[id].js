import AppLayout from '@/layout/AppLayout';
import BackLayout from '@/layout/BackLayout';
import { useRouter } from 'next/router';

const Info = () => {
  const router = useRouter();
  const { id } = router.query;
  return (
    <>
    <AppLayout>
      <BackLayout>
        <div>{id}번 게시글</div>
      </BackLayout>
    </AppLayout>
    </>
  );
}

export default Info;