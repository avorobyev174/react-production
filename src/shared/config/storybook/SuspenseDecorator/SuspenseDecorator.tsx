import '@/app/styles/index.scss';
import { type Decorator } from '@storybook/react';
import { Suspense } from 'react';

export const SuspenseDecorator: Decorator = (Story) => (
  <Suspense>
    { Story() }
  </Suspense>
);
