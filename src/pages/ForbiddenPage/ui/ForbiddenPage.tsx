import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Page } from '@/widgets/Page';

interface IForbiddenPageProps {
  className?: string;
}

const ForbiddenPage = memo((props: IForbiddenPageProps) => {
  const { className } = props;
  const { t } = useTranslation();

  return (
    <Page className={classNames('', {}, [ className ])}>
      { t('У вас нет доступа к этой странице') }
    </Page>
  );
});

export default ForbiddenPage;
