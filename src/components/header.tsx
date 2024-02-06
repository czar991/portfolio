'use client';
import { useActiveSectionContext } from '@/context/active-section-context';
import { links } from '@/lib/data';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Header() {
  const { activeSection, setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
  return (
    <header className='z-50 relative'>
      <motion.div
        className='flex fixed top-0 left-1/2 -translate-x-1/2 h-18 w-full rounded-none border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[8px] sm:top-6 sm:h-[52px] sm:w-[36rem] sm:rounded-full dark:bg-gray-950 dark:border-black/40 dark:bg-opacity-75'
        initial={{ opacity: 0, marginTop: '-300px' }}
        animate={{ opacity: 1, marginTop: '0' }}
      >
        <nav className='flex flex-1'>
          <ul className='flex flex-1 px-5 flex-wrap items-center justify-center gap-y-1 text-sm font-medium  text-gray-500 sm:flex-nowrap gap-5 sm:justify-between'>
            {links.map((link) => (
              <li key={link.hash} className='relative flex items-center justify-center'>
                <Link
                  className={cn('hover:text-gray-950 transition dark:text-gray-500 dark:hover:text-gray-300 px-3 py-2', {
                    'text-gray-950 dark:text-gray-200': activeSection === link.name,
                  })}
                  href={link.hash}
                  onClick={() => {
                    setActiveSection(link.name);
                    setTimeOfLastClick(Date.now());
                  }}
                >
                  {link.name}

                  {link.name === activeSection && (
                    <motion.span
                      className='bg-gray-100 rounded-full absolute inset-0 -z-10 dark:bg-gray-800'
                      layoutId='activeSection'
                      transition={{
                        type: 'spring',
                        stiffness: 380,
                        damping: 30,
                      }}
                    ></motion.span>
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </motion.div>
    </header>
  );
}
