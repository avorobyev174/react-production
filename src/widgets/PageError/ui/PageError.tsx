import { classNames } from 'shared/lib/classNames/classNames';
import styles from './PageError.module.scss'
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';

interface IPageErrorProps {
  className?: string;
}

export const PageError = ({ className }: IPageErrorProps) => {
  const { t } = useTranslation();

  const reloadPage = () => {
    location.reload();
  }

  return (
    <div className={ classNames(styles.PageError, {}, [ className ])}>
      <p>{ t('Произошла непредвиденная ошибка') }</p>
      <Button onClick={ reloadPage }>
        { t('Обновить страницу') }
      </Button>
    </div>
  );
};
