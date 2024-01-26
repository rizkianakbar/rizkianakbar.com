import { Sun } from 'lucide-react';
import Image from 'next/image';

import { Button } from '@/components/ui/button';

import bannerImage from '@/public/images/kian-conf.jpeg';

export default function Home() {
  return (
    <div className='w-full h-full max-w-[1072px] mx-auto flex flex-col'>
      <header>
        <div className='flex items-center justify-between h-16 before:block'>
          <div className='grow flex justify-between md:justify-end space-x-4'>
            <Button
              variant='hoverable'
              className='px-2'
              aria-label='Toggle Dark Mode'
            >
              <Sun />
            </Button>
            <Button variant='hoverable' aria-label='Download Resume'>
              Resume
            </Button>
          </div>
        </div>
      </header>

      <section className='flex flex-col gap-4 lg:w-[700px] py-2 fadeIn'>
        <figure className='p-1 border-2 border-black rounded-2xl'>
          <Image
            src={bannerImage}
            placeholder='blur'
            alt='Me'
            width={700}
            height={300}
            priority={true}
            className='rounded-xl border-2 border-black object-cover h-[200px] lg:h-[300px] w-full object-top select-none'
          />
        </figure>

        <div className='flex flex-col justify-center gap-2'>
          <p className='text-3xl font-bold'>Hi, I&apos;m Rizkian Akbar</p>
          <p className='text-lg font-medium'>
            Experienced Senior Frontend Engineer with 4+ years of expertise in
            TypeScript, React, and Next.js. Proven track record of leading
            projects from scratch, optimizing codebases, and implementing web3
            features. Currently pursuing a Computer Science degree while
            excelling in a full-time role. Passionate about leveraging
            technology to solve real-world problems.
          </p>
        </div>

        <div className='flex items-center gap-4'>
          <Button variant='hoverable' className='px-2' aria-label='Github Link'>
            <Image
              src='/logo/github.svg'
              alt='Github'
              width={26}
              height={26}
              priority={true}
            />
          </Button>

          <Button
            variant='hoverable'
            className='px-2'
            aria-label='Linkedin Link'
          >
            <Image
              src='/logo/linkedin.svg'
              alt='Linkedin'
              width={26}
              height={26}
              priority={true}
            />
          </Button>

          <Button variant='hoverable' className='px-2' aria-label='X Link'>
            <Image
              src='/logo/x_light.svg'
              alt='X'
              width={24}
              height={24}
              priority={true}
            />
          </Button>
        </div>
      </section>
    </div>
  );
}
