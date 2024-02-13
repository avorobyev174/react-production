import { classNames } from 'shared/lib/classNames/classNames';
import { DynamicModuleLoader, type TReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import {
  EValidateProfileError,
  fetchProfileData,
  getProfileError,
  getProfileForm,
  getProfileIsLoading,
  getProfileReadonly,
  getProfileValidateErrors,
  profileActions,
  ProfileCard,
  profileReducer
} from 'entites/Profile';
import { useCallback } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import { ProfilePageHeader } from './ProfilePageHeader/ProfilePageHeader';
import { type ECurrency } from 'entites/Currency';
import { type ECountry } from 'entites/Country';
import { ETextTheme, Text } from 'shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useParams } from 'react-router-dom';
import { Page } from 'widgets/Page/Page';

const reducers: TReducersList = {
  profile: profileReducer
}

interface IProfilePageProps {
  className?: string;
}

const ProfilePage = ({ className }: IProfilePageProps) => {
  const dispatch = useAppDispatch();
  const { t } = useTranslation();
  const formData = useSelector(getProfileForm);
  const isLoading = useSelector(getProfileIsLoading);
  const error = useSelector(getProfileError);
  const readonly = useSelector(getProfileReadonly);
  const validateErrors = useSelector(getProfileValidateErrors);
  const { id } = useParams<{ id: string }>();

  const validateErrorTranslates = {
    [ EValidateProfileError.SERVER_ERROR ]: t('Ошибка сервера'),
    [ EValidateProfileError.INCORRECT_COUNTRY ]: t('Некорректный регион'),
    [ EValidateProfileError.INCORRECT_USER_DATA ]: t('Имя и фамилия обязательны'),
    [ EValidateProfileError.INCORRECT_AGE ]: t('Некорректный возраст'),
    [ EValidateProfileError.NO_DATA ]: t('Данные не указаны')
  }

  useInitialEffect(() => {
    if (id) {
      dispatch(fetchProfileData(id));
    }
  })

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
      <Page className={ classNames('', {}, [ className ])}>
        <ProfilePageHeader />
        { validateErrors?.length && validateErrors.map((error) =>
          <Text
            key={ error }
            theme={ ETextTheme.ERROR }
            text={ validateErrorTranslates[ error ] }
          />
        )}
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
      </Page>
    </DynamicModuleLoader>
  );
};

export default ProfilePage;
