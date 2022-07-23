import * as React from 'react';
import { BsGithub, BsLinkedin, BsTwitter } from 'react-icons/bs';

import SignatureIcon from '@/components/assets/SignatureIcon';
import StyledLink from '@/components/atoms/StyledLink';
export default function Footer() {
  return (
    <footer className='flex flex-col justify-center items-start max-w-2xl mx-auto w-full mb-8'>
      <hr className='w-full border-1 border-gray-200 dark:border-gray-800 mb-8' />
      <div className='w-full max-w-2xl grid grid-cols-3 pb-16 sm:grid-cols-4 gap-4'>
        <div className='sm:flex flex-col hidden sm:visible'>
          <SignatureIcon />
        </div>

        <div className='flex flex-col space-y-4 sm:pl-[30%]'>
          <StyledLink href='/'>Home</StyledLink>
          <StyledLink href='/about'>About</StyledLink>
          <StyledLink href='/project'> Project</StyledLink>
          <StyledLink href='/blog'>Blog</StyledLink>
        </div>

        <div className='flex flex-col space-y-4 sm:pl-[30%]'>
          <StyledLink openNewTab href='https://github.com/rizkianakbar'>
            <BsGithub className='hidden sm:inline mr-2 h-5 mb-1' />
            GitHub
          </StyledLink>
          <StyledLink openNewTab href='https://twitter.com/rizkianakbr'>
            <BsTwitter className='hidden sm:inline mr-2 h-5 ml-0.5 mb-1' />
            Twitter
          </StyledLink>
          <StyledLink
            openNewTab
            href='https://www.linkedin.com/in/rizkianakbar'
          >
            <BsLinkedin className='hidden sm:inline mr-2 h-5 ml-0.5 mb-1' />
            LinkedIn
          </StyledLink>
        </div>

        <div className='flex flex-col space-y-4 sm:pl-[30%] '>
          <StyledLink openNewTab href='https://quranmemo.vercel.app'>
            QuranMemo
          </StyledLink>
          <StyledLink openNewTab href='https://caridev.vercel.app'>
            CariDev
          </StyledLink>
          <StyledLink openNewTab href='https://github.com/rizkianakbar'>
            Galen
          </StyledLink>
        </div>
      </div>
    </footer>
  );
}
