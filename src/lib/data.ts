import React from 'react';
import { CgWorkAlt } from 'react-icons/cg';
import { FaReact, FaPenNib, FaAnchor } from 'react-icons/fa';
import { LuGraduationCap } from 'react-icons/lu';
import chechBets from '../../public/bets.png';
import rmtdevImg from '../../public/rmtdev.png';
import wordanalyticsImg from '../../public/wordanalytics.png';

export const links = [
  {
    name: 'Главная',
    hash: '#home',
  },
  {
    name: 'Обо мне',
    hash: '#about',
  },
  {
    name: 'Проекты',
    hash: '#projects',
  },
  {
    name: 'Навыки',
    hash: '#skills',
  },
  {
    name: 'Опыт',
    hash: '#experience',
  },
  {
    name: 'Связь',
    hash: '#contact',
  },
] as const;

export const experiencesData = [
  {
    title: 'Онлайн курсы фронтенд-разработчика',
    description: 'Я закончил курсы после 3 месяцев обучения и сразу нашел работу контент-менеджера.',
    icon: React.createElement(LuGraduationCap),
    date: '2020',
  },
  {
    title: 'Контент-менеджер',
    description: 'Я проработал контент-менеджером 2 месяца, попутно повышая квалификацию фронтенд-разработчика.',
    icon: React.createElement(CgWorkAlt),
    date: '2021',
  },
  {
    title: 'Html-верстальщик',
    description: 'Затем устроился в веб-студии на вёрстку макетов Figma/Photoshop.',
    icon: React.createElement(FaPenNib),
    date: '2021 - 2022',
  },
  {
    title: 'Frontend-разработчик',
    description: 'Изучил React, Redux, Typescript и устроился на должность фронтенд-разработчика.',
    icon: React.createElement(FaReact),
    date: '2022 - 2023',
  },
  {
    title: 'Fullstack-разработчик',
    description: 'Более полугода порабатываю на фрилансе фронтенд/фулстэк-разработчиком. Выделил для себя Next.js, Node.js, Express.',
    icon: React.createElement(FaAnchor),
    date: '2023 - present',
  },
] as const;

export const projectsData = [
  {
    title: 'Чек-Бетс',
    description: 'Я работал фронтэнд разработчиком в этом проекте. Проект-платформа для анализа спортивных событий.',
    tags: ['HTML', 'SCSS', 'JavaScript', 'Laravel:Blade', 'PHP'],
    imageUrl: chechBets,
    url: 'https://check-bets.online/',
  },
  {
    title: 'rmtDev',
    description: 'Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.',
    tags: ['React', 'TypeScript', 'Next.js', 'Tailwind', 'Redux'],
    imageUrl: rmtdevImg,
    url: '#!',
  },
  {
    title: 'Word Analytics',
    description: 'A public web app for quick analytics on text. It shows word count, character count and social media post limits.',
    tags: ['React', 'Next.js', 'SQL', 'Tailwind', 'Framer'],
    imageUrl: wordanalyticsImg,
    url: '#!',
  },
] as const;

export const skillsData = [
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'Next.js',
  'Node.js',
  'Git',
  'Tailwind',
  'Prisma',
  'Redux',
  'Express',
  'PostgreSQL',
  'MongoDB',
] as const;
