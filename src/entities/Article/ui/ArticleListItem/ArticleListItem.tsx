import { useTranslation } from 'react-i18next';
import { type HTMLAttributeAnchorTarget, memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import styles from './ArticleListItem.module.scss'
import { type IArticle, type IArticleTextBlock } from '../../model/types/article';
import { EArticleBlockType, EArticleView } from '../../model/const/const';
import { Text } from '@/shared/ui/Text';
import { Icon } from '@/shared/ui/Icon';
import EyeIcon from '@/shared/assets/icons/eye-20-20.svg';
import { Card } from '@/shared/ui/Card';
import { useHover } from '@/shared/lib/hooks/useHover/useHover';
import { Avatar } from '@/shared/ui/Avatar';
import { Button } from '@/shared/ui/Button';
import { ArticleTextBlock } from '../ArticleTextBlock/ArticleTextBlock';
import { AppLink } from '@/shared/ui/AppLink';
import { getRouteArticlesDetails } from '@/shared/const/router';

interface IArticleListItemProps {
  className?: string;
  article: IArticle;
  view: EArticleView;
  target?: HTMLAttributeAnchorTarget;
}

export const ArticleListItem = memo((props: IArticleListItemProps) => {
  const {
    className, article, view, target,
  } = props;
  const [ , bindHover ] = useHover();
  const { t } = useTranslation();
  const types = <Text text={article.type.join(', ')} className={styles.types} />;
  const views = (
    <>
      <Text text={String(article.views)} className={styles.views} />
      <Icon Svg={EyeIcon} />
    </>
  );

  if (view === EArticleView.BIG) {
    const textBlock = article
      .blocks.find(({ type }) => type === EArticleBlockType.TEXT) as IArticleTextBlock;

    return (
      <div className={classNames(styles.ArticleListItem, {}, [ className, styles[ view ] ])}>
        <Card className={styles.card}>
          <div className={styles.header}>
            <Avatar size={30} src={article.user.avatar} />
            <Text text={article.user.username} className={styles.username} />
            <Text text={article.createdAt} className={styles.date} />
          </div>
          <Text text={article.title} className={styles.title} />
          { types }
          <img src={article.img} alt={article.title} className={styles.img} />
          { textBlock && (<ArticleTextBlock block={textBlock} className={styles.textBlock} />) }
          <div className={styles.footer}>
            <AppLink to={ getRouteArticlesDetails(article.id) }>
              <Button>
                { t('Читать далее') }
              </Button>
            </AppLink>
            { views }
          </div>
        </Card>
      </div>
    );
  }

  return (
    <AppLink
      target={target}
      to={ getRouteArticlesDetails(article.id) }
      {...bindHover}
      className={classNames(styles.ArticleListItem, {}, [ className, styles[ view ] ])}
    >
      <Card className={styles.card}>
        <div className={styles.imgWrapper}>
          <img src={article.img} alt={article.title} className={styles.img} />
          <Text text={article.createdAt} className={styles.date} />
        </div>
        <div className={styles.infoWrapper}>
          { types }
          { views }
        </div>
        <Text text={article.title} className={styles.title} />
      </Card>
    </AppLink>
  );
});
