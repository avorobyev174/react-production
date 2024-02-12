import { classNames } from 'shared/lib/classNames/classNames';
import styles from './ArticleListItem.module.scss'
import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { type IArticle } from 'entites/Article';
import { EArticleBlockType, EArticleView, type IArticleTextBlock } from 'entites/Article/model';
import { Text } from 'shared/ui/Text/Text';
import { Icon } from 'shared/ui/Icon/Icon';
import EyeIcon from 'shared/assets/icons/eye-20-20.svg';
import { Card } from 'shared/ui/Card/Card';
import { useHover } from 'shared/lib/hooks/useHover/useHover';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Button } from 'shared/ui/Button/Button';
import { ArticleTextBlock } from 'entites/Article/ui/ArticleTextBlock/ArticleTextBlock';
import { useNavigate } from 'react-router-dom';
import { RoutePath } from 'shared/config/RouteConfig/routeConfig';

interface IArticleListItemProps {
  className?: string;
  article: IArticle;
  view: EArticleView;
}

export const ArticleListItem = memo((props: IArticleListItemProps) => {
  const { className, article, view } = props;
  const [ , bindHover ] = useHover();
  const { t } = useTranslation();
  const navigate = useNavigate();
  const types = <Text text={ article.type.join(', ') } className={ styles.types } />;
  const views = (
    <>
      <Text text={ String(article.views) } className={ styles.views } />
      <Icon Svg={ EyeIcon }/>
    </>
  );

  const onArticleOpen = useCallback(() => {
    navigate(RoutePath.article_details + article.id)
  }, [ article.id, navigate ]);

  if (view === EArticleView.BIG) {
    const textBlock = article
      .blocks.find(({ type }) => type === EArticleBlockType.TEXT) as IArticleTextBlock;

    return (
      <div className={ classNames(styles.ArticleListItem, {}, [ className, styles[ view ] ]) }>
        <Card className={ styles.card }>
          <div className={ styles.header }>
            <Avatar size={ 30 } src={ article.user.avatar } />
            <Text text={ article.user.username } className={ styles.username } />
            <Text text={ article.createdAt } className={ styles.date } />
          </div>
          <Text text={ article.title } className={ styles.title }/>
          { types }
          <img src={ article.img } alt={ article.title } className={ styles.img }/>
          { textBlock && (<ArticleTextBlock block={ textBlock } className={ styles.textBlock } />) }
          <div className={ styles.footer }>
            <Button onClick={ onArticleOpen }>
              { t('Читать далее') }
            </Button>
            { views }
          </div>
        </Card>
      </div>
    );
  }

  return (
    <div
      { ...bindHover }
      className={ classNames(styles.ArticleListItem, {}, [ className, styles[ view ] ]) }
    >
      <Card className={ styles.card } onClick={ onArticleOpen }>
        <div className={ styles.imgWrapper }>
          <img src={ article.img } alt={ article.title } className={ styles.img }/>
          <Text text={ article.createdAt } className={ styles.date } />
        </div>
        <div className={ styles.infoWrapper }>
          { types }
          { views }
        </div>
        <Text text={ article.title } className={ styles.title }/>
      </Card>
    </div>
  );
});
