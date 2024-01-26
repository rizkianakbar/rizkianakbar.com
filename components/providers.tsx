'use client';

import { AppProgressBar as ProgressBar } from 'next-nprogress-bar';
import { ReactNode } from 'react';

interface ProvidersProps {
  children: ReactNode;
}

const Providers = ({ children }: ProvidersProps): JSX.Element => {
  return (
    <>
      <ProgressBar
        height='4px'
        color='#000000'
        options={{ showSpinner: false }}
        shallowRouting
      />

      {children}
    </>
  );
};

export default Providers;
