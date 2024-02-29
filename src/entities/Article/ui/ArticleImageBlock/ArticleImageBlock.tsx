import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import styles from './ArticleImageBlock.module.scss'
import { type IArticleImageBlock } from '../../model/index';
import { ETextAlign, Text } from '@/shared/ui/Text';

interface IArticleImageBlockProps {
  className?: string;
  block: IArticleImageBlock;
}

export const ArticleImageBlock = memo(({ className, block }: IArticleImageBlockProps) => {
  return (
    <div className={classNames(styles.ArticleImageBlock, {}, [ className ])}>
      <img src={block.src} className={styles.img} alt={block.title} />
      { block.title && (<Text text={block.title} align={ETextAlign.CENTER} />)}
    </div>
  );
});
