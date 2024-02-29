import { useTranslation } from 'react-i18next';
import { type HTMLAttributeAnchorTarget, memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import styles from './ArticleList.module.scss'
import { type IArticle } from '../../model/types/article';
import { EArticleView } from '../../model/const/const';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import { ArticleListItemSkeleton } from '../ArticleListItemSkeleton/ArticleListItemSkeleton';

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
    target,
  } = props;
  const { t } = useTranslation('articles');
  const getSkeletons = (view: EArticleView) => Array.from(
    { length: view === EArticleView.SMALL ? 9 : 3 },
    (_, index) => (<ArticleListItemSkeleton className={styles.card} view={view} key={index} />),
  )

  if (!isLoading && !articles.length) {
    return (
      <div className={classNames(styles.ArticleList, {}, [ className, styles[ view ] ])}>
        { t('Статьи отсутствуют') }
      </div>
    )
  }

  return (
    <div
      className={classNames(styles.ArticleList, {}, [ className, styles[ view ] ])}
    >
      { articles.map((article) => (
        <ArticleListItem
          article={article}
          view={view}
          target={target}
          key={article.id}
          className={styles.item}
        />
      )) }
      { isLoading && getSkeletons(view) }
    </div>
  )
});
