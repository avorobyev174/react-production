import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Page } from '@/widgets/Page';

interface IAdminPanelPageProps {
  className?: string;
}

const AdminPanelPage = memo((props: IAdminPanelPageProps) => {
  const { className } = props;
  const { t } = useTranslation();

  return (
    <Page data-testid="AdminPage" className={classNames('', {}, [ className ])}>
      { t('админ панель') }
    </Page>
  );
});

export default AdminPanelPage;
