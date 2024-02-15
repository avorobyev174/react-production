import { classNames } from 'shared/lib/classNames/classNames';
import styles from './ArticleDetailsPageHeader.module.scss'
import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { Button } from 'shared/ui/Button/Button';
import { RoutePath } from 'shared/config/RouteConfig/routeConfig';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getArticleDetailsData } from 'entites/Article';
import { getCanEditArticle } from 'pages/article-details-page/model/selectors/article';

interface IArticleDetailsPageHeaderProps {
  className?: string;
}

export const ArticleDetailsPageHeader = memo((props: IArticleDetailsPageHeaderProps) => {
  const { className } = props;
  const { t } = useTranslation();
  const navigate = useNavigate();
  const canEdit = useSelector(getCanEditArticle);
  const article = useSelector(getArticleDetailsData);

  const onBackToList = useCallback(() => {
    navigate(RoutePath.articles);
  }, [ navigate ]);

  const onEditArticle = useCallback(() => {
    navigate(`${ RoutePath.article_details }${ article?.id }/edit`);
  }, [ article?.id, navigate]);

  return (
    <div className={ classNames(styles.ArticleDetailsPageHeader, {}, [ className ]) }>
      <Button onClick={ onBackToList }>
        { t('Назад к списку') }
      </Button>
      { canEdit && <Button
        className={ styles.editBtn }
        onClick={ onEditArticle }
      >
        { t('Редактировать') }
      </Button> }
    </div>
  );
});
