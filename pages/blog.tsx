import type { NextPage } from 'next';
import { Suspense } from 'react';

import Layout from '@/components/layout';
import ComingSoon from '@/components/molecules/ComingSoon';

const Blog: NextPage = () => {
  return (
    <Suspense fallback={null}>
      <Layout title='Blog - Rizkian Akbar'>
        <ComingSoon name='Blog' />
      </Layout>
    </Suspense>
  );
};

export default Blog;
