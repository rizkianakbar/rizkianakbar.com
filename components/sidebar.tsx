'use client';

import { HomeIcon, InfoIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

import kianLogo from '@/public/images/kian.jpeg';

type SidebarImageLinkProps = {
  href: string;
};

const SidebarImageLink: FC<SidebarImageLinkProps> = ({ href }) => (
  <div className='flex justify-center my-4'>
    <Link
      href={href}
      className='p-1 border-2 border-black rounded-2xl hover:bg-[#B31312]'
    >
      <Image
        src={kianLogo}
        alt='K I A N'
        width={0}
        height={0}
        placeholder='blur'
        sizes='(min-width: 768px) 64px, 48px'
        className='rounded-xl border-2 border-black h-10 w-8 select-none'
      />
    </Link>
  </div>
);

export default function Sidebar() {
  return (
    <div className='fixed w-full md:sticky bottom-0 md:top-0 h-16 md:w-24 shrink-0 md:h-screen overflow-y-auto overflow-x-hidden no-scrollbar md:border-r-2 border-t-2 md:border-t-0 border-black z-50 backdrop-filter md:backdrop-blur-none backdrop-blur-lg'>
      <div className='h-full w-full flex flex-row md:flex-col justify-between after:flex-1 after:mt-auto'>
        <div className='hidden md:block md:flex-1'>
          <SidebarImageLink href='/' />
        </div>

        <div className='flex-1 grow flex items-center w-full'>
          <nav className='w-full'>
            <ul className='md:space-y-4 flex flex-row items-center w-screen justify-evenly md:flex-col md:justify-start md:items-center md:w-24'>
              <li className='md:py-2'>
                <Link
                  className='w-full h-6 flex items-center justify-center relative after:absolute after:w-0.5 after:right-0 after:top-0 after:bottom-0 text-black'
                  href='/'
                >
                  <span className='sr-only'>Home</span>

                  <HomeIcon />
                </Link>
              </li>

              <li className='md:py-2'>
                <Link
                  className='w-full h-6 flex items-center justify-center relative after:absolute after:w-0.5 after:right-0 after:top-0 after:bottom-0 text-black'
                  href='/'
                >
                  <span className='sr-only'>About</span>

                  <InfoIcon />
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}
