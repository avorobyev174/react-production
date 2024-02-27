import { classNames } from 'shared/lib/classNames/classNames';
import styles from './ArticleList.module.scss'
import { useTranslation } from 'react-i18next';
import { type HTMLAttributeAnchorTarget, memo } from 'react';
import { type IArticle } from '../../model/types/article';
import { EArticleView } from '../../model/const/const';
import { ArticleListItem } from 'entites/Article/ui/ArticleListItem/ArticleListItem';
import { ArticleListItemSkeleton } from 'entites/Article/ui/ArticleListItemSkeleton/ArticleListItemSkeleton';
import { List, type ListRowProps, WindowScroller } from 'react-virtualized';
import { PAGE_ID } from 'widgets/Page/Page';

interface IArticleListProps {
  className?: string;
  isLoading: boolean;
  articles: IArticle[];
  view?: EArticleView;
  target?: HTMLAttributeAnchorTarget;
  virtualized?: boolean;
}

export const ArticleList = memo((props: IArticleListProps) => {
  const {
    className,
    isLoading,
    articles,
    view = EArticleView.SMALL,
    target,
    virtualized = true
  } = props;
  const { t } = useTranslation('articles');
  const getSkeletons = (view: EArticleView) =>
    Array.from(
      { length: view === EArticleView.SMALL ? 9 : 3 },
      (_, index) => (<ArticleListItemSkeleton className={ styles.card } view={ view } key={ index }/>))

  const rowRenderer = ({ index, key, style }: ListRowProps) => {
    const items = [];
    const fromIndex = index * itemsPerRow;
    const toIndex = Math.min(fromIndex + itemsPerRow, articles.length);

    for (let i = fromIndex; i < toIndex; i += 1) {
      items.push(
        <ArticleListItem
          article={ articles[ index ] }
          view={ view }
          target={ target }
          key={ `str${ i }` }
          className={ styles.item }
        />
      )
    }
    return (
      <div
        className={ styles.row }
        key={ key }
        style={ style }
      >
        { items }
      </div>
    );
  }

  if (!isLoading && !articles.length) {
    return (<div className={ classNames(styles.ArticleList, {}, [ className, styles[ view ] ]) }>
      { t('Статьи отсутствуют') }
    </div>)
  }

  const isBig = view === EArticleView.BIG;
  const itemsPerRow = isBig ? 1 : 3;
  const rowCount = isBig ? articles.length : Math.ceil(articles.length / itemsPerRow);

  return (
    <WindowScroller scrollElement={ document.getElementById(PAGE_ID) as Element }>
      { ({ height, width, registerChild, scrollTop, isScrolling, onChildScroll }) => (
        <div
          /* eslint-disable-next-line @typescript-eslint/ban-ts-comment */
          // @ts-expect-error
          ref={ registerChild }
          className={ classNames(styles.ArticleList, {}, [ className, styles[ view ] ]) }
        >
          { virtualized
            ? (
              <List
                width={ width ? width - 80 : 700 }
                height={ height ?? 700 }
                rowHeight={ isBig ? 700 : 330 }
                rowRenderer={ rowRenderer }
                rowCount={ rowCount }
                autoHeight
                scrollTop={ scrollTop }
                onScroll={ onChildScroll }
                isScrolling={ isScrolling }
              />)
            : (articles.map((article) => (
              <ArticleListItem
                article={ article }
                view={ view }
                target={ target }
                key={ article.id }
                className={ styles.item }
              />)))
          }
          { isLoading && getSkeletons(view) }
        </div>
      )}
    </WindowScroller>
  );
});
