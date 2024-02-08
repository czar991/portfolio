'use client';

import React, { useEffect } from 'react';
import SectionHeading from './section-heading';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { experiencesData } from '@/lib/data';
import { useSectionInView } from '@/lib/hooks';

export default function Experience() {
  const { ref, inView } = useSectionInView('Опыт', 0.25);
  return (
    <section ref={ref} id='experience' className='scroll-mt-28 mb-28 sm:mb-40 overflow-hidden'>
      <SectionHeading>Опыт работы</SectionHeading>
      <VerticalTimeline lineColor=''>
        {experiencesData.map((item, index) => (
          <VerticalTimelineElement
            key={index}
            visible={inView}
            contentStyle={{
              boxShadow: 'none',
              border: '1px solid rgba(0, 0, 0, 0.05)',
              textAlign: 'left',
              padding: '1.3rem 2rem',
            }}
            contentArrowStyle={{}}
            date={item.date}
            icon={item.icon}
            iconStyle={{
              fontSize: '1.5rem',
            }}
          >
            <h3 className='font-semibold capitalize'>{item.title}</h3>
            <p className='!mt-1 !font-normal text-gray-700'>{item.description}</p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </section>
  );
}
