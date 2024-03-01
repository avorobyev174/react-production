import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Button } from '@/shared/ui/Button';
import { classNames } from '@/shared/lib/classNames/classNames';
import { getArticleDetailsData } from '@/entities/Article';
import { getCanEditArticle } from '../../model/selectors/article';
import { HStack } from '@/shared/ui/Stack';
import { getRouteArticleEdit, getRouteArticles } from '@/shared/const/router';

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
    navigate(getRouteArticles());
  }, [ navigate ]);

  const onEditArticle = useCallback(() => {
    navigate(getRouteArticleEdit(article?.id));
  }, [ article?.id, navigate]);

  return (
    <HStack max justify="between" className={classNames('', {}, [ className ])}>
      <Button onClick={onBackToList}>
        { t('Назад к списку') }
      </Button>
      { canEdit && (
        <Button
          onClick={onEditArticle}
        >
          { t('Редактировать') }
        </Button>
      ) }
    </HStack>
  );
});
