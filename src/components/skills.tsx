'use client';
import { skillsData } from '@/lib/data';
import SectionHeading from './section-heading';
import { useSectionInView } from '@/lib/hooks';
import { motion } from 'framer-motion';
export default function Skills() {
  const { ref } = useSectionInView('Навыки');
  const fadeInAnimationVariants = {
    initial: {
      opacity: 0,
      y: 100,
    },
    animate: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.05 * index,
      },
    }),
  };
  return (
    <section id='skills' ref={ref} className='mb-28 max-w-[800px] scroll-mt-28 text-center sm:mb-40'>
      <SectionHeading>Мои навыки</SectionHeading>
      <ul className='flex items-center justify-center flex-wrap gap-2 text-lg text-gray-800'>
        {skillsData.map((skill, index) => (
          <motion.li
            key={index}
            className='bg-white borderBlack rounded-xl px-5 py-3'
            variants={fadeInAnimationVariants}
            initial='initial'
            whileInView='animate'
            viewport={{
              once: true,
            }}
            custom={index}
          >
            {skill}
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
