import type { Metadata } from 'next';
import localFont from 'next/font/local';

import '../styles/globals.css';

import { cn } from '@/lib/utils';

import Providers from '@/components/providers';
import Sidebar from '@/components/sidebar';

const walsheimFont = localFont({
  src: [
    {
      path: '../public/fonts/Walsheim-Light.woff2',
      weight: '400',
    },
    {
      path: '../public/fonts/Walsheim-Regular.woff2',
      weight: '500',
    },
    {
      path: '../public/fonts/Walsheim-Medium.woff2',
      weight: '600',
    },
    {
      path: '../public/fonts/Walsheim-Bold.woff2',
      weight: '700',
    },
  ],
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: new URL('https://rizkianakbar.com'),
  title: {
    default: 'Rizkian Akbar',
    template: '%s | Rizkian Akbar',
  },
  description: 'Software Engineer, Web3 and Blockchain Enthusiast',
  openGraph: {
    title: 'Rizkian Akbar',
    description: 'Software Engineer, Web3 and Blockchain Enthusiast',
    url: 'https://rizkianakbar.com',
    siteName: 'Rizkian Akbar',
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  twitter: {
    title: 'Rizkian Akbar',
    card: 'summary_large_image',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={cn(walsheimFont.className, 'antialiased relative tracking')}
      >
        <Providers>
          <div className='absolute inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]' />

          <div className='max-w-7xl min-h-screen mx-auto flex relative'>
            <Sidebar />

            <main className='grow overflow-hidden px-6'>{children}</main>
          </div>
        </Providers>
      </body>
    </html>
  );
}
