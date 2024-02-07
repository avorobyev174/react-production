import { classNames } from 'shared/lib/classNames/classNames';
import styles from './ArticleCodeBlock.module.scss'
import { memo } from 'react';
import { type IArticleCodeBlock } from '../../model/index';
import { Code } from 'shared/ui/Code/Code';

interface IArticleCodeBlockProps {
  className?: string;
  block: IArticleCodeBlock;
}

export const ArticleCodeBlock = memo(({ className, block }: IArticleCodeBlockProps) => {
  return (
    <div className={ classNames(styles.ArticleCodeBlock, {}, [ className ]) }>
      <Code text={ block.code } />
    </div>
  );
});
