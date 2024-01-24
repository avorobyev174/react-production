import { type FC, lazy } from 'react';
import { type ILoginFormProps } from 'features/AuthByUserName/ui/LoginForm/LoginForm';

export const LoginFormAsync =
  lazy<FC<ILoginFormProps>>(async () => await new Promise((resolve) => {
    setTimeout(() => { resolve(import('./LoginForm')); }, 500);
  }));
