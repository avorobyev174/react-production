import { classNames } from 'shared/lib/classNames/classNames';
import { DynamicModuleLoader, type TReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { fetchProfileData, ProfileCard, profileReducer } from 'entites/Profile';
import { useEffect } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';

const reducers: TReducersList = {
  profile: profileReducer
}

interface IProfilePageProps {
  className?: string;
}

const ProfilePage = ({ className }: IProfilePageProps) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    void dispatch(fetchProfileData({}));
  }, [ dispatch ]);

  return (
    <DynamicModuleLoader name="profile" reducers={ reducers } removeAfterUnmount>
      <div className={ classNames('', {}, [ className ])}>
        <ProfileCard />
      </div>
    </DynamicModuleLoader>
  );
};

export default ProfilePage;
