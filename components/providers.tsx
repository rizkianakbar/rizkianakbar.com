'use client';

import { AppProgressBar as ProgressBar } from 'next-nprogress-bar';
import { ReactNode, Suspense } from 'react';

interface ProvidersProps {
  children: ReactNode;
}

const Providers = ({ children }: ProvidersProps): JSX.Element => {
  return (
    <>
      <Suspense fallback={null}>
        <ProgressBar
          height='4px'
          color='#000000'
          options={{ showSpinner: false }}
          shallowRouting
        />
      </Suspense>

      {children}
    </>
  );
};

export default Providers;
