import { lazy } from 'react';

export const AboutPageAsync = lazy(
  // @ts-ignore
  () => new Promise(resolve => { setTimeout(() => resolve(import('./AboutPage')), 1000) }));
