'use client';

import SectionHeading from './section-heading';
import { motion } from 'framer-motion';
import { useSectionInView } from '@/lib/hooks';

export default function About() {
  const { ref } = useSectionInView('Обо мне');
  return (
    <motion.section
      ref={ref}
      className='mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28'
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id='about'
    >
      <SectionHeading>Обо мне</SectionHeading>
      <p className='mb-3'>
        Четыре года назад я увлёкся программированием и записался на курсы фронтенд-разработчика. Начинал в айти как контент-менеджер &rarr; HTML верстальщик &rarr;
        фронтенд-разработчик. Сейчас занимаюсь <span className='font-medium'>фул-стэк разработкой</span>. Мой основной стэк{' '}
        <span className='font-medium'>React, Next.js, Node.js, TypeScript, Prisma и PostgreSQL</span>. Я всегда стремлюсь к изучению новых технологий. На данный момент ищу работу
        <span className='font-medium'> как фулстэк/фронтенд</span> разработчик.
      </p>
    </motion.section>
  );
}
