import { classNames } from '@/shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect';
import type { ECurrency } from '@/entities/Currency';
import type { ECountry } from '@/entities/Country';
import { EValidateProfileError } from '../../model/const/const';
import {
  getProfileIsLoading
} from '../../model/selectors/getProfileIsLoading/getProfileIsLoading';
import { getProfileForm } from '../../model/selectors/getProfileForm/getProfileForm';
import { getProfileError } from '../../model/selectors/getProfileError/getProfileError';
import { getProfileReadonly } from '../../model/selectors/getProfileReadonly/getProfileReadonly';
import {
  getProfileValidateErrors
} from '../../model/selectors/getProfileValidateErrors/getProfileValidateErrors';
import { fetchProfileData } from '../../model/services/fetchProfileData/fetchProfileData';
import { profileActions, profileReducer } from '@/features/editableProfileCard/model/slice/profileSlice';
import { ProfileCard } from '@/entities/Profile';
import { ETextTheme, Text } from '@/shared/ui/Text/Text';
import { DynamicModuleLoader, type TReducersList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { VStack } from '@/shared/ui/Stack';
import {
  EditableProfilePageHeader
} from '../EditableProfilePageHeader/EditableProfilePageHeader';

const reducers: TReducersList = {
  profile: profileReducer
}
interface EditableProfileCardProps {
  className?: string;
  profileId?: string;
}

export const EditableProfileCard = memo((props: EditableProfileCardProps) => {
  const { className, profileId } = props;
  const { t } = useTranslation('profile');
  const dispatch = useAppDispatch();
  const formData = useSelector(getProfileForm);
  const isLoading = useSelector(getProfileIsLoading);
  const error = useSelector(getProfileError);
  const readonly = useSelector(getProfileReadonly);
  const validateErrors = useSelector(getProfileValidateErrors);

  const validateErrorTranslates = {
    [ EValidateProfileError.SERVER_ERROR ]: t('Ошибка сервера'),
    [ EValidateProfileError.INCORRECT_COUNTRY ]: t('Некорректный регион'),
    [ EValidateProfileError.INCORRECT_USER_DATA ]: t('Имя и фамилия обязательны'),
    [ EValidateProfileError.INCORRECT_AGE ]: t('Некорректный возраст'),
    [ EValidateProfileError.NO_DATA ]: t('Данные не указаны')
  }

  useInitialEffect(() => {
    if (profileId) {
      dispatch(fetchProfileData(profileId));
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
    <DynamicModuleLoader
      name="profile"
      reducers={ reducers }
      removeAfterUnmount
    >
      <VStack
        gap="8"
        max
        className={ classNames('', {}, [ className ]) }
      >
        <EditableProfilePageHeader />
        { validateErrors?.length && validateErrors.map((error) =>
          <Text
            key={ error }
            theme={ ETextTheme.ERROR }
            text={ validateErrorTranslates[ error ] }
            data-testid={ 'EditableProfileCard.Error' }
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
      </VStack>
    </DynamicModuleLoader>
  );
});
