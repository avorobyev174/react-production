import { classNames } from 'shared/lib/classNames/classNames';
import styles from './ArticleList.module.scss'
import { useTranslation } from 'react-i18next';
import { type HTMLAttributeAnchorTarget, memo } from 'react';
import { type IArticle } from 'entites/Article';
import { EArticleView } from 'entites/Article/model';
import { ArticleListItem } from 'entites/Article/ui/ArticleListItem/ArticleListItem';
import { ArticleListItemSkeleton } from 'entites/Article/ui/ArticleListItemSkeleton/ArticleListItemSkeleton';

interface IArticleListProps {
  className?: string;
  isLoading: boolean;
  articles: IArticle[];
  view?: EArticleView;
  target?: HTMLAttributeAnchorTarget;
}

export const ArticleList = memo((props: IArticleListProps) => {
  const {
    className,
    isLoading,
    articles,
    view = EArticleView.SMALL,
    target
  } = props;
  const { t } = useTranslation('articles');
  const getSkeletons = (view: EArticleView) =>
    Array.from(
      { length: view === EArticleView.SMALL ? 9 : 3 },
      (_, index) => (<ArticleListItemSkeleton className={ styles.card } view={ view } key={ index }/>))

  const renderArticle = (article: IArticle) => {
    return (
      <ArticleListItem
        article={ article }
        view={ view }
        key={ article.id }
        target={ target }
      />
    );
  }

  return (
    <div className={ classNames(styles.ArticleList, {}, [ className, styles[ view ] ]) }>
      {
        isLoading
          ? getSkeletons(view)
          : articles.length ? articles.map(renderArticle) : t('Статьи отсутствуют')
      }
    </div>
  );
});
