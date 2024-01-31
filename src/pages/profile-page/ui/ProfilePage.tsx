import { classNames } from 'shared/lib/classNames/classNames';
import { DynamicModuleLoader, type TReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import {
  fetchProfileData,
  profileActions,
  profileReducer,
  ProfileCard,
  getProfileReadonly,
  getProfileError,
  getProfileIsLoading,
  getProfileForm
} from 'entites/Profile';
import { useCallback, useEffect } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import { ProfilePageHeader } from './ProfilePageHeader/ProfilePageHeader';
import { type ECurrency } from 'entites/Currency';
import { type ECountry } from 'entites/Country';

const reducers: TReducersList = {
  profile: profileReducer
}

interface IProfilePageProps {
  className?: string;
}

const ProfilePage = ({ className }: IProfilePageProps) => {
  const dispatch = useAppDispatch();
  const formData = useSelector(getProfileForm);
  const isLoading = useSelector(getProfileIsLoading);
  const error = useSelector(getProfileError);
  const readonly = useSelector(getProfileReadonly);

  useEffect(() => {
    dispatch(fetchProfileData());
  }, [ dispatch ]);

  const onChangeFirstname = useCallback((value?: string) => {
    dispatch(profileActions.updateProfile({ first: value || '' }))
  }, [ dispatch ])

  const onChangeLastname = useCallback((value?: string) => {
    dispatch(profileActions.updateProfile({ lastname: value || '' }))
  }, [ dispatch ])

  const onChangeCity = useCallback((value?: string) => {
    dispatch(profileActions.updateProfile({ city: value || '' }))
  }, [ dispatch ])

  const onChangeAge = useCallback((value?: string) => {
    dispatch(profileActions.updateProfile({ age: Number(value || 0) }))
  }, [ dispatch ])

  const onChangeUsername = useCallback((value?: string) => {
    dispatch(profileActions.updateProfile({ username: value || '' }))
  }, [ dispatch ])

  const onChangeAvatar = useCallback((value?: string) => {
    dispatch(profileActions.updateProfile({ avatar: value || '' }))
  }, [ dispatch ])

  const onChangeCurrency = useCallback((currency: ECurrency) => {
    dispatch(profileActions.updateProfile({ currency }))
  }, [ dispatch ])

  const onChangeCountry = useCallback((country: ECountry) => {
    dispatch(profileActions.updateProfile({ country }))
  }, [ dispatch ])

  return (
    <DynamicModuleLoader name="profile" reducers={ reducers } removeAfterUnmount>
      <div className={ classNames('', {}, [ className ])}>
        <ProfilePageHeader />
        <ProfileCard
          data={ formData }
          isLoading={ isLoading }
          error={ error }
          onChangeFirstname={ onChangeFirstname }
          onChangeLastname={ onChangeLastname }
          onChangeAvatar={ onChangeAvatar }
          onChangeUsername={ onChangeUsername }
          onChangeAge={ onChangeAge }
          onChangeCity={ onChangeCity }
          readonly={ readonly }
          onChangeCurrency={ onChangeCurrency }
          onChangeCountry={ onChangeCountry }
        />
      </div>
    </DynamicModuleLoader>
  );
};

export default ProfilePage;
