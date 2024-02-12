import { classNames } from 'shared/lib/classNames/classNames';
import styles from './ArticlesPage.module.scss'
import { memo } from 'react';
import { ArticleList } from 'entites/Article';
import { EArticleView } from 'entites/Article/model';

interface IArticlesPage {
  className?: string;
}

export const ArticlesPage = ({ className }: IArticlesPage) => {
  return (
    <div className={ classNames(styles.ArticlesPage, {}, [ className ]) }>
      <ArticleList
        isLoading
        articles={ [] }
        view={ EArticleView.SMALL }
      />
    </div>
  );
};

export default memo(ArticlesPage);
