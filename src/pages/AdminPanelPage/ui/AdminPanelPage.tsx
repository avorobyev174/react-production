import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { Page } from 'widgets/Page/Page';

interface IAdminPanelPageProps {
  className?: string;
}

const AdminPanelPage = memo((props: IAdminPanelPageProps) => {
  const { className } = props;
  const { t } = useTranslation();

  return (
    <Page className={ classNames('', {}, [ className ]) }>
      { t('админ панель') }
    </Page>
  );
});

export default AdminPanelPage;
