import { classNames } from 'shared/lib/classNames/classNames';
import styles from './ArticleDetailsPage.module.scss'
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { ArticleDetails } from 'entites/Article';
import { useParams } from 'react-router-dom';

interface IArticleDetailsPage {
  className?: string;
}

export const ArticleDetailsPage = ({ className }: IArticleDetailsPage) => {
  const { t } = useTranslation('articles');
  const { id } = useParams<{ id: string }>()

  return (
    <div className={ classNames(styles.ArticleDetailsPage, {}, [ className ]) }>
      { id ? <ArticleDetails articleDetailsId={ id }/> : t('Статья не найдена') }
    </div>
  );
};

export default memo(ArticleDetailsPage);
