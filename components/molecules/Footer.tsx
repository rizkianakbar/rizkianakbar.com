import Link from 'next/link';

import GithubIcon from '@/components/icons/GithubIcon';
import LinkedinIcon from '@/components/icons/LinkedinIcon';
import SignatureIcon from '@/components/icons/SignatureIcon';
import TwitterIcon from '@/components/icons/TwitterIcon';

const ExternalLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => (
  <a
    className='text-gray-500 hover:text-gray-600 transition'
    target='_blank'
    rel='noopener noreferrer'
    href={href}
  >
    {children}
  </a>
);

export default function Footer() {
  return (
    <footer className='flex flex-col justify-center items-start max-w-2xl mx-auto w-full mb-8'>
      <hr className='w-full border-1 border-gray-200 dark:border-gray-800 mb-8' />
      <div className='w-full max-w-2xl grid grid-cols-3 pb-16 sm:grid-cols-4 gap-0 md:gap-4'>
        <div className='sm:flex flex-col hidden sm:visible'>
          <SignatureIcon />
        </div>
        <div className='flex flex-col space-y-4 sm:pl-[30%]'>
          <Link href='/'>
            <a className='text-gray-500 hover:text-gray-600 transition'>Home</a>
          </Link>
          <Link href='/about'>
            <a className='text-gray-500 hover:text-gray-600 transition'>
              About
            </a>
          </Link>
          <Link href='/project'>
            <a className='text-gray-500 hover:text-gray-600 transition'>
              Project
            </a>
          </Link>
          <Link href='/blog'>
            <a className='text-gray-500 hover:text-gray-600 transition'>Blog</a>
          </Link>
        </div>

        <div className='flex flex-col space-y-4 sm:pl-[30%]'>
          <ExternalLink href='https://github.com/rizkianakbar'>
            <GithubIcon />
            GitHub
          </ExternalLink>
          <ExternalLink href='https://twitter.com/rizkianakbr'>
            <TwitterIcon />
            Twitter
          </ExternalLink>
          <ExternalLink href='https://www.linkedin.com/in/rizkianakbar/'>
            <LinkedinIcon />
            LinkedIn
          </ExternalLink>
        </div>
        <div className='flex flex-col space-y-4 sm:pl-[30%]'>
          <ExternalLink href='https://quranmemo.vercel.app'>
            QuranMemo
          </ExternalLink>
          <ExternalLink href='https://github.com/rizkianakbar'>
            Galen
          </ExternalLink>
        </div>
      </div>
    </footer>
  );
}
