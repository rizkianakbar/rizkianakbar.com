import clsx from 'clsx';
import type { NextPage } from 'next';
import { default as NextImage } from 'next/image';
import * as React from 'react';

import useLoaded from '@/hooks/useLoaded';

import StyledLink from '@/components/atoms/StyledLink';
import GithubIcon from '@/components/icons/GithubIcon';
import ResumeIcon from '@/components/icons/ResumeIcon';
import TwitterIcon from '@/components/icons/TwitterIcon';
import Layout from '@/components/layout';

import { useGlobalContext } from '@/context/GlobalContext';

const Home: NextPage = () => {
  const {
    globalState: { navIsActive, setNavIsActive },
  } = useGlobalContext();

  React.useEffect(() => {
    setNavIsActive(false);
  }, [setNavIsActive]);
  const isLoaded = useLoaded();

  return (
    <React.Suspense fallback={null}>
      <Layout>
        <div
          className={clsx(
            'flex flex-col justify-center items-start max-w-2xl border-gray-200 dark:border-gray-700 mx-auto pb-16',
            isLoaded && 'fade-in-start'
          )}
        >
          <div className='flex flex-col-reverse sm:flex-row items-start'>
            <div className='flex flex-col pr-8'>
              <h1
                className='font-bold text-3xl md:text-5xl tracking-tight mb-2 text-black dark:text-white'
                data-fade='1'
              >
                Hey, I&apos;m
              </h1>
              <h1
                className='font-bold text-3xl md:text-5xl tracking-tight mb-1 text-black dark:text-white'
                data-fade='2'
              >
                Rizkian Akbar
              </h1>
              <h2
                className='text-gray-700 dark:text-gray-200 blur-[4px] select-none'
                data-fade='3'
              >
                Test Automation Engineer at{' '}
                <span className='font-semibold'>MasihSecret</span>
                {/* <span className='font-semibold'>HappyFresh</span> */}
              </h2>
              <h2
                className='text-gray-700 dark:text-gray-200 mb-4 blur-[4px] select-none'
                data-fade='3'
              >
                Frontend Engineer at{' '}
                <span className='font-semibold'>MasihSecret</span>
                {/* <span className='font-semibold'>Bountie</span> */}
              </h2>
              <p
                className='text-gray-600 dark:text-gray-400 mb-4'
                data-fade='4'
              >
                I work in React ecosystem especially with Next.js, Tailwind,
                Typescript. I also work in Automation Testing ecosystem with
                Appium, Ruby, Cucumber, Gherkins. ✌🏻✌🏻✌🏻🔥🔥🔥
              </p>
            </div>
            <div
              className='w-[100px] sm:w-[276px] mb-8 sm:mb-0 mr-auto'
              data-fade='2'
            >
              <NextImage
                alt='Rizkian Akbar'
                height={287}
                width={210}
                src='/kian.jpeg'
                sizes='30vw'
                priority
                className='rounded-full filter grayscale'
              />
            </div>
          </div>
          <div className='flex flex-wrap items-start' data-fade='5'>
            <StyledLink variant='one' href='/' className='group'>
              <ResumeIcon className='inline mr-2 ml-1 mb-1 group-hover:text-black dark:group-hover:text-white' />
              Resume
            </StyledLink>{' '}
            <StyledLink
              openNewTab
              variant='one'
              href='https://twitter.com/rizkianakbr'
              className='group'
            >
              <TwitterIcon className='inline mr-[2px] group-hover:text-blue-400' />
              @rizkianakbr
            </StyledLink>{' '}
            <StyledLink
              openNewTab
              variant='one'
              href='https://github.com/rizkianakbar'
              className='group'
            >
              <GithubIcon className='inline mr-[2px] group-hover:text-black dark:group-hover:text-white' />
              rizkianakbar
            </StyledLink>
          </div>
        </div>
      </Layout>
    </React.Suspense>
  );
};

export default Home;
