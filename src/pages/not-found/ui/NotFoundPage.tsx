import { classNames } from 'shared/lib/classNames/classNames';
import styles from './NotFoundPage.module.scss'
import { useTranslation } from 'react-i18next';
import { Page } from 'widgets/Page/Page';

interface INotFoundPageProps {
  className?: string;
}

export const NotFoundPage = ({ className }: INotFoundPageProps) => {
  const { t } = useTranslation();

  return (
    <Page className={ classNames(styles.NotFoundPage, {}, [ className ])}>
      { t('Страница не найдена') }
    </Page>
  );
};
