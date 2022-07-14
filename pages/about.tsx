import clsx from 'clsx';
import type { NextPage } from 'next';
import { default as NextImage } from 'next/image';
import { Suspense } from 'react';

import useLoaded from '@/hooks/useLoaded';

import StyledLink from '@/components/atoms/StyledLink';
import EmailIcon from '@/components/icons/EmailIcon';
import GithubIcon from '@/components/icons/GithubIcon';
import LinkedinIcon from '@/components/icons/LinkedinIcon';
import ResumeIcon from '@/components/icons/ResumeIcon';
import TwitterIcon from '@/components/icons/TwitterIcon';
import WhatsappIcon from '@/components/icons/WhatsappIcon';
import Layout from '@/components/layout';

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
              <StyledLink
                variant='one'
                href='https://drive.google.com/file/d/1U8bbHb1dnxaaHbS9_j8W4bsLH2lTAQoX/view?usp=sharing'
                className='group'
              >
                <ResumeIcon className='inline mr-2 ml-1 mb-1 group-hover:text-black dark:group-hover:text-white' />
              </StyledLink>{' '}
              <StyledLink
                openNewTab
                variant='one'
                // email
                href='mailto:rizkianakbar4@gmail.com'
                className='group'
              >
                <EmailIcon className='inline mt-[-5px] group-hover:text-black dark:group-hover:text-white' />
              </StyledLink>{' '}
              <StyledLink
                openNewTab
                variant='one'
                href='https://www.linkedin.com/in/rizkianakbar/'
                className='group'
              >
                <LinkedinIcon className='inline mr-[2px] group-hover:text-blue-400' />
              </StyledLink>
              <StyledLink
                openNewTab
                variant='one'
                href='https://github.com/rizkianakbar'
                className='group'
              >
                <GithubIcon className='inline mr-[2px] group-hover:text-black dark:group-hover:text-white' />
              </StyledLink>
              <StyledLink
                openNewTab
                variant='one'
                href='https://twitter.com/rizkianakbr'
                className='group'
              >
                <TwitterIcon className='inline mr-[2px] group-hover:text-blue-400' />
              </StyledLink>{' '}
              <StyledLink
                openNewTab
                variant='one'
                // whatsapp
                href='https://wa.me/62895610381334'
                className='group'
              >
                <WhatsappIcon className='inline mt-[-5px] group-hover:text-green-300 dark:group-hover:text-green-300' />
              </StyledLink>
            </div>
            <hr className='w-full border-1 border-gray-200 dark:border-gray-800 my-6' />
          </div>
          <div className='flex flex-col'>
            <h1
              className=' font-bold text-3xl md:text-4xl tracking-tight mb-2 text-black dark:text-white'
              data-fade='2'
            >
              Bio
            </h1>

            <p className='text-gray-600 dark:text-gray-400 mb-4' data-fade='4'>
              I work in React ecosystem especially with Next.js, Tailwind,
              Typescript. I also work in Automation Testing ecosystem with
              Appium, Ruby, Cucumber, Gherkins. ✌🏻🔥
            </p>
          </div>
        </div>
      </Layout>
    </Suspense>
  );
};

export default About;
