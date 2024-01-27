import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { DynamicModuleLoader, type TReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { profileReducer } from 'entites/Profile';

const reducers: TReducersList = {
  profile: profileReducer
}

interface IProfilePageProps {
  className?: string;
}

const ProfilePage = ({ className }: IProfilePageProps) => {
  const { t } = useTranslation();

  return (
    <DynamicModuleLoader name="profile" reducers={ reducers } removeAfterUnmount>
      <div className={ classNames('', {}, [ className ])}>
        {t('Profile')}
      </div>
    </DynamicModuleLoader>
  );
};

export default ProfilePage;
