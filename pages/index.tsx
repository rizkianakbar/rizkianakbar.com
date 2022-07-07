import type { NextPage } from 'next';
import { Suspense } from 'react';

import Layout from '@/components/layout';
import ComingSoon from '@/components/molecules/ComingSoon';

const Home: NextPage = () => {
  return (
    <Suspense fallback={null}>
      <Layout>
        <ComingSoon name='Home' />
      </Layout>
    </Suspense>
  );
};

export default Home;
