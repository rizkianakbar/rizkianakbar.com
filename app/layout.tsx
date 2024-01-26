import type { Metadata } from 'next';

import '../styles/globals.css';

import Providers from '@/components/providers';
import Sidebar from '@/components/sidebar';

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
      <body className='antialiased bg-white text-slate-800 dark:bg-slate-900 dark:text-slate-200 tracking-tight'>
        <Providers>
          <div className='max-w-7xl mx-auto'>
            <div className='min-h-screen flex relative'>
              <Sidebar />

              <main className='grow overflow-hidden px-6'>
                <div className='absolute inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]' />
                {children}
              </main>
            </div>
          </div>
        </Providers>
      </body>
    </html>
  );
}
