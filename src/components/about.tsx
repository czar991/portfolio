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
        Начинал в айти как контент-менеджер &rarr; HTML верстальщик &rarr; фронтэнд-разработчик. Сейчас занимаюсь <span className='font-medium'>фронтэнд разработкой</span>. Мой
        основной стэк <span className='font-medium'>React, Next.js, Node.js, TypeScript, Javascript, SCSS, Tailwind</span>. На данный момент ищу работу
        <span className='font-medium'> как фулстэк/фронтэнд</span> разработчик.
      </p>
    </motion.section>
  );
}
