import type { NextPage } from 'next';
import { Suspense } from 'react';

import Layout from '@/components/layout';
import CommingSoon from '@/components/molecules/ComingSoon';

const Home: NextPage = () => {
  return (
    <Suspense fallback={null}>
      <Layout>
        <CommingSoon name='Home' />
      </Layout>
    </Suspense>
  );
};

export default Home;
