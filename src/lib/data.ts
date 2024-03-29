import React from 'react';
import { CgWorkAlt } from 'react-icons/cg';
import { FaReact, FaPenNib, FaAnchor } from 'react-icons/fa';
import chechBets from '../../public/bets.png';
import cargo from '../../public/cargo.png';
import docsapp from '../../public/docsapp.png';

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
    description: 'Более полугода подрабатываю на фрилансе фронтенд/фулстэк-разработчиком. Выделил для себя Next.js, Node.js, Nestjs.',
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
    title: 'CargoGenius',
    description: 'Pet-проект. Фулстэк-разработчик. Прототип интернет магазина.',
    tags: ['React', 'TypeScript', 'Next.js', 'SCSS', 'Redux', 'NestJS', 'Sequelize ORM', 'MySQL'],
    imageUrl: cargo,
    url: 'https://cargo-client-production.up.railway.app',
  },
  {
    title: 'DocsApp',
    description: 'Фулстэк-разработчик. Pet-проект для создания заметок.',
    tags: ['React', 'Next.js', 'Tailwind', 'FramerJs'],
    imageUrl: docsapp,
    url: 'https://docsapp-tau.vercel.app',
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
  'NestJs',
  'PostgreSQL',
  'MongoDB',
  'Framer-motion',
] as const;
