import clsx from 'clsx';
import type { NextPage } from 'next';
import { default as NextImage } from 'next/image';
import * as React from 'react';
import { BsGithub, BsTwitter } from 'react-icons/bs';
import { HiNewspaper } from 'react-icons/hi';

import useLoaded from '@/hooks/useLoaded';

import Button from '@/components/atoms/Button';
import StyledLink from '@/components/atoms/StyledLink';
import Layout from '@/components/layout';

import { useGlobalContext } from '@/context/GlobalContext';

const Home: NextPage = () => {
  const {
    globalState: { setNavIsActive },
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
          <div className='flex flex-col-reverse items-start sm:flex-row'>
            <div className='flex flex-col pr-8'>
              <h1
                className='mb-2 text-3xl font-bold tracking-tight text-black md:text-5xl dark:text-white'
                data-fade='1'
              >
                Hey, I&apos;m
              </h1>
              <h1
                className='mb-1 text-3xl font-bold tracking-tight text-black md:text-5xl dark:text-white'
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
                className='mb-4 text-gray-600 dark:text-gray-400'
                data-fade='4'
              >
                I work in React ecosystem especially with Next.js, Tailwind,
                Typescript. I also work in Automation Testing ecosystem with
                Appium, Ruby, Cucumber, Gherkins. ✌🏻🔥
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
          <div
            className='flex flex-wrap items-start md:ml-4 mb-4'
            data-fade='7'
          >
            <Button
              className='mr-4 glow'
              href='mailto:rizkianakbar4@gmail.com?subject=I really want to hire you as a Software Engineer'
            >
              Hire Me!
            </Button>
            <Button href='/about'>Learn more about me!</Button>
          </div>
          <div className='flex flex-wrap items-start' data-fade='5'>
            <StyledLink
              variant='one'
              href='https://drive.google.com/file/d/1uSwU6N37NHpoCkDg_v2U5_GHUlFb5GSf/view'
              className='group'
            >
              <HiNewspaper className='inline mr-[5px] group-hover:text-black dark:group-hover:text-white h-5 w-5 ml-0.5 mb-1' />
              Resume
            </StyledLink>{' '}
            <StyledLink
              openNewTab
              variant='one'
              href='https://twitter.com/rizkianakbr'
              className='group'
            >
              <BsTwitter className='inline mr-[2px] group-hover:text-blue-400 h-5 w-5 ml-0.5 mb-1' />
              @rizkianakbr
            </StyledLink>{' '}
            <StyledLink
              openNewTab
              variant='one'
              href='https://github.com/rizkianakbar'
              className='group'
            >
              <BsGithub className='inline mr-[5px] group-hover:text-black dark:group-hover:text-white h-5 w-5 ml-0.5 mb-1' />
              rizkianakbar
            </StyledLink>
          </div>
        </div>
      </Layout>
    </React.Suspense>
  );
};

export default Home;
