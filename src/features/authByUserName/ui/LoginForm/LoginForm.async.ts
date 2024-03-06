import { type FC, lazy } from 'react';
import { type ILoginFormProps } from './LoginForm';

export const LoginFormAsync = lazy<FC<ILoginFormProps>>(
  async () => import('./LoginForm'),
);
