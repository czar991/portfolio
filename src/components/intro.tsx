'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { BsArrowRight } from 'react-icons/bs';
import { buttonVariants } from './ui/button';
import { useSectionInView } from '@/lib/hooks';
import { useActiveSectionContext } from '@/context/active-section-context';
export default function Intro() {
  const { ref } = useSectionInView('Главная');
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section ref={ref} className='pt-28 max-w-screen-md mb-20 sm:mb-0' id='home'>
      <div className='flex items-center justify-center'>
        <motion.div
          className='relative'
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            type: 'tween',
            duration: 0.2,
          }}
        >
          <Image
            className='rounded-full border-[3px] border-white shadow-xl'
            src='https://github.com/shadcn.png'
            alt='portrait'
            width={64}
            height={64}
            quality={95}
            priority={true}
          />
          <span className='text-3xl absolute bottom-0 right-0'>✌</span>
        </motion.div>
      </div>
      <motion.h1 className='mb-10 mt-4 text-2xl font-medium sm:text-4xl text-center max-w-prose' initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }}>
        <strong>Привет, я Алексей.</strong> Я <strong>фронтенд-разработчик</strong> с <strong>3 летним</strong> опытом работы. Мой фокус это{' '}
        <span className='underline'>React (Next.js)</span>.
      </motion.h1>
      <motion.div
        className='flex flex-col sm:flex-row items-center justify-center gap-2 text-lg font-medium'
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <Link
          href='#contact'
          className={buttonVariants({
            className: 'rounded-full gap-x-2',
          })}
          onClick={() => {
            setActiveSection('Связь');
            setTimeOfLastClick(Date.now());
          }}
        >
          Связаться со мной <BsArrowRight className='opacity-70 group-hover:translate-x-1 transition-transform' />
        </Link>
      </motion.div>
    </section>
  );
}
