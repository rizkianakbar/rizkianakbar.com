import type { NextPage } from 'next';
import { Suspense } from 'react';

import Layout from '@/components/layout';
import CommingSoon from '@/components/molecules/ComingSoon';

const Blog: NextPage = () => {
  return (
    <Suspense fallback={null}>
      <Layout title='Blog - Rizkian Akbar'>
        <CommingSoon name='Blog' />
      </Layout>
    </Suspense>
  );
};

export default Blog;
