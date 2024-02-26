import { classNames } from 'shared/lib/classNames/classNames';
import { Page } from 'widgets/Page/Page';
import { VStack } from 'shared/ui/Stack/VStack/VStack';
import { EditableProfileCard } from 'features/editableProfileCard';
import { useParams } from 'react-router-dom';
import { Text } from 'shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';

interface IProfilePageProps {
  className?: string;
}

const ProfilePage = ({ className }: IProfilePageProps) => {
  const { id } = useParams<{ id: string }>();
  const { t } = useTranslation('profile');

  if (!id) {
    return (<Text text={ t('Не удалось загрузить профиль') } />)
  }

  return (
    <Page className={ classNames('', {}, [ className ])}>
      <VStack max gap="16">
        <EditableProfileCard profileId={ id } />
      </VStack>
    </Page>
  );
};

export default ProfilePage;
