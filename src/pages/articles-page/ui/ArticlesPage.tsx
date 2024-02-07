import { classNames } from 'shared/lib/classNames/classNames';
import styles from './ArticlesPage.module.scss'
import { memo } from 'react';

interface IArticlesPage {
  className?: string;
}

export const ArticlesPage = ({ className }: IArticlesPage) => {
  return (
    <div className={ classNames(styles.ArticlesPage, {}, [ className ]) }>
    </div>
  );
};

export default memo(ArticlesPage);
