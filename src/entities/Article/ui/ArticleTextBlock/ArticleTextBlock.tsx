import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import styles from './ArticleTextBlock.module.scss'
import { type IArticleTextBlock } from '../../model/index';
import { Text } from '@/shared/ui/Text/Text';

interface IArticleTextBlockProps {
  className?: string;
  block: IArticleTextBlock;
}

export const ArticleTextBlock = memo(({ className, block }: IArticleTextBlockProps) => {
  return (
    <div className={classNames(styles.ArticleTextBlock, {}, [ className ])}>
      { block?.title && (<Text title={block.title} className={styles.title} />) }
      { block.paragraphs.map((paragraph) => (
        <Text key={paragraph} text={paragraph} className={styles.paragraph} />
      ))}
    </div>
  );
});
