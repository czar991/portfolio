'use client';

import React from 'react';
import SectionHeading from './section-heading';
import { motion } from 'framer-motion';
import { useSectionInView } from '@/lib/hooks';
import { sendEmail } from '@/server-actions/sendEmail';
import SubmitBtn from './submit-btn';
import toast from 'react-hot-toast';

export default function Contact() {
  const { ref } = useSectionInView('Связь');

  return (
    <motion.section
      id='contact'
      ref={ref}
      className='mb-20 sm:mb-28 w-[min(100%,38rem)] text-center'
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeading>Для связи</SectionHeading>
      <p className='text-gray-700 -mt-6'>
        Вы можете связаться со мной по email напрямую{' '}
        <a className='underline' href='mailto:nevertheless997@gmail.com'>
          nevertheless997@gmail.com
        </a>{' '}
        или через эту форму.
      </p>

      <form
        className='mt-10 flex flex-col'
        action={async (formData) => {
          const { data, error } = await sendEmail(formData);

          if (error) {
            toast.error(error);
            return;
          }

          toast.success('Email sent successfully!');
        }}
      >
        <input className='h-14 px-4 rounded-lg borderBlack' name='senderEmail' type='email' placeholder='Ваш email' />
        <textarea className='h-52 my-3 rounded-lg borderBlack p-4' name='message' placeholder='Ваше сообщение' />
        <SubmitBtn />
        <p className='mt-10 self-start'>
          Также по телефону:{' '}
          <a className='underline' href='tel:89772727853'>
            8-977-272-78-53
          </a>{' '}
        </p>
        <p className='self-start'>
          Или в телеграм:{' '}
          <a className='underline' href='https://t.me/czar009'>
            @czar009
          </a>
        </p>
      </form>
    </motion.section>
  );
}
