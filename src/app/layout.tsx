import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/header';
import ActiveSectionContextProvider from '@/context/active-section-context';
import { Toaster } from 'react-hot-toast';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Personal Portfolio',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className='scroll-smooth'>
      <body className={`${inter.className}, bg-[#cfe3f744]`}>
        <ActiveSectionContextProvider>
          <Header />
          {children}
          <Toaster position='bottom-right' />
        </ActiveSectionContextProvider>
      </body>
    </html>
  );
}
