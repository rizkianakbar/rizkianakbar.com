import clsx from 'clsx';
import type { NextPage } from 'next';
import Image, { default as NextImage } from 'next/image';
import Link from 'next/link';
import { Suspense } from 'react';

import useLoaded from '@/hooks/useLoaded';

import StyledLink from '@/components/atoms/StyledLink';
import UnstyledLink from '@/components/atoms/UnstyledLink';
import Layout from '@/components/layout';

import { AboutBio, aboutData, AboutSocial } from '@/constant/about';

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
          <div className='flex flex-col w-full text-center'>
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
              className='mb-1 text-3xl font-squada font-bold tracking-tight text-center text-black md:text-4xl dark:text-white'
              data-fade='2'
            >
              Rizkian Akbar
            </h1>
            <h2
              className='text-gray-700 dark:text-gray-200 select-none'
              data-fade='3'
            >
              Frontend Engineer at{' '}
              <span className='font-semibold'>
                {' '}
                <Link href='https://www.linkedin.com/company/bountiegaming/mycompany/'>
                  <a target='_blank'>Bountie Holdings Pte. Ltd.</a>
                </Link>
              </span>
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
            <hr className='w-full my-6 border-gray-200 border-1 dark:border-gray-800' />
          </div>
          <div className='flex flex-col'>
            <h1
              className='mb-2 text-2xl font-semibold tracking-tight text-black md:text-4xl dark:text-white'
              data-fade='2'
            >
              Bio
            </h1>
            <p className='text-gray-600 dark:text-gray-400' data-fade='4'>
              {AboutBio}
            </p>
          </div>
          {aboutData.map((item, index) => (
            <div key={index}>
              <h1
                className='w-full mb-4 text-2xl font-semibold tracking-tight text-black md:text-4xl dark:text-white'
                data-fade='2'
              >
                {item.title}
              </h1>
              {item.data.map((subItem, subIndex) => (
                <div
                  className='grid w-full grid-cols-12 gap-2 mb-6'
                  data-fade='3'
                  key={subIndex}
                >
                  <div className='col-span-3'>
                    <UnstyledLink href={subItem.url} className='font-bold'>
                      <Image
                        alt='Rizkian Akbar'
                        width={150}
                        height={50}
                        src={subItem.image}
                        className='object-contain filter grayscale hover:grayscale-off hover:filter-none'
                      />
                    </UnstyledLink>
                  </div>
                  <div className='col-span-9 list-outside border-l border-gray-200 dark:border-gray-700'>
                    <div className='mb-10 ml-2 last:mb-0'>
                      <h2 className='text-lg font-medium text-gray-900 md:text-xl dark:text-gray-100'>
                        {subItem.position}
                      </h2>
                      <time className='mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500'>
                        {subItem.date}
                      </time>
                      <address className='mb-1 text-sm not-italic font-normal leading-none text-gray-400 dark:text-gray-500'>
                        {subItem.location}
                      </address>
                      <ul className='ml-6 list-disc list-outside'>
                        {subItem.description}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </Layout>
    </Suspense>
  );
};

export default About;
