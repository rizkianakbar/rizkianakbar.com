import clsx from 'clsx';
import type { NextPage } from 'next';
import { default as NextImage } from 'next/image';
import { Suspense } from 'react';

import useLoaded from '@/hooks/useLoaded';

import StyledLink from '@/components/atoms/StyledLink';
import UnstyledLink from '@/components/atoms/UnstyledLink';
import Layout from '@/components/layout';

import { AboutBio, AboutSocial, aboutWorkExperience } from '@/constant/about';

const About: NextPage = () => {
  const isLoaded = useLoaded();
  return (
    <Suspense fallback={null}>
      <Layout title='About me - Rizkian Akbar'>
        <div
          className={clsx(
            'flex flex-col justify-center items-start max-w-2xl border-gray-200 dark:border-gray-700 mx-auto pb-16 gap-6',
            isLoaded && 'fade-in-start'
          )}
        >
          <div className='flex flex-col text-center w-full'>
            <div className='w-[100px] sm:w-[150px] mb-6 mx-auto' data-fade='2'>
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
            <h1
              className='text-center font-bold text-3xl md:text-4xl tracking-tight mb-1 text-black dark:text-white'
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
            <div
              className='flex flex-wrap items-start justify-center'
              data-fade='5'
            >
              {AboutSocial.map((item, index) => (
                <StyledLink
                  variant='one'
                  href={item.url}
                  className='group'
                  key={index}
                >
                  {item.icon}
                </StyledLink>
              ))}
            </div>
            <hr className='w-full border-1 border-gray-200 dark:border-gray-800 my-6' />
          </div>
          <div className='flex flex-col'>
            <h1
              className=' font-bold text-2xl md:text-4xl tracking-tight mb-2 text-black dark:text-white'
              data-fade='2'
            >
              Bio
            </h1>

            <p className='text-gray-600 dark:text-gray-400 mb-4' data-fade='4'>
              {AboutBio}
            </p>
          </div>
          <div className='flex flex-col'>
            <h1
              className='font-bold text-2xl md:text-4xl tracking-tight mb-4 text-black dark:text-white'
              data-fade='2'
            >
              Work Experience
            </h1>
            {aboutWorkExperience.map((item, index) => (
              <div className='w-full mb-8' key={index}>
                <div className='flex flex-col justify-between md:flex-row'>
                  <h4 className='w-full text-lg font-medium text-gray-900 md:text-xl dark:text-gray-100'>
                    {item.position} at{' '}
                    <UnstyledLink href={item.url} className='font-bold'>
                      {item.company}
                    </UnstyledLink>
                  </h4>
                  <p className='w-52 mb-4 text-left text-gray-500 md:text-right md:mb-0'>
                    Nov 2021 - Present
                  </p>
                </div>
                <p className='text-gray-600 dark:text-gray-400 mb-2'>
                  {item.location}
                </p>
                <p className='text-gray-600 dark:text-gray-400'>
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Layout>
    </Suspense>
  );
};

export default About;
