import { type FC, lazy } from 'react';
import { type ILoginFormProps } from '@/features/AuthByUserName/ui/LoginForm/LoginForm';

export const LoginFormAsync =
  lazy<FC<ILoginFormProps>>(async () => await import('./LoginForm'));
