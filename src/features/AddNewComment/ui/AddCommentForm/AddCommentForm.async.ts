import { type FC, lazy } from 'react';
import { type IAddCommentFormProps } from './AddCommentForm';

export const AddCommentFormAsync =
  lazy<FC<IAddCommentFormProps>>(async () => await new Promise((resolve) => {
    setTimeout(() => { resolve(import('./AddCommentForm')); }, 500);
  }));
