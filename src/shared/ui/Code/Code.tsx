import { classNames } from '@/shared/lib/classNames/classNames';
import styles from './Code.module.scss'
import { memo, useCallback } from 'react';
import { Button, EButtonTheme } from '@/shared/ui/Button/Button';
import CopyIcon from '@/shared/assets/icons/copy-20-20.svg';

interface ICode {
  className?: string;
  text: string;
}

export const Code = memo(({ className, text }: ICode) => {
  const onCopy = useCallback(() => {
    navigator.clipboard.writeText(text);
  }, [ text ]);

  return (
    <pre className={ classNames(styles.Code, {}, [ className ]) }>
      <Button
        className={ styles.copyBtn }
        theme={ EButtonTheme.CLEAR }
        onClick={ onCopy }
      >
        <CopyIcon className={ styles.copyIcon } />
      </Button>
      <code className={ styles.codeSize }>
        { text }
      </code>
    </pre>
  );
});
