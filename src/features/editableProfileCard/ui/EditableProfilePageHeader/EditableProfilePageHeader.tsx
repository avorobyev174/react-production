import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Text } from 'shared/ui/Text/Text';
import { Button, EButtonTheme } from 'shared/ui/Button/Button';
import { useSelector } from 'react-redux';
import { useCallback } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { getUserAuthData } from 'entites/User';
import { HStack } from 'shared/ui/Stack/HStack/HStack';
import { getProfileData } from 'features/editableProfileCard/model/selectors/getProfileData/getProfileData';
import { getProfileReadonly } from 'features/editableProfileCard/model/selectors/getProfileReadonly/getProfileReadonly';
import { profileActions } from 'features/editableProfileCard/model/slice/profileSlice';
import { updateProfileData } from 'features/editableProfileCard/model/services/updateProfileData/updateProfileData';

interface IProfilePageHeaderProps {
  className?: string;
}

export const EditableProfilePageHeader = ({ className }: IProfilePageHeaderProps) => {
  const { t } = useTranslation('profile');
  const authData = useSelector(getUserAuthData);
  const profileData = useSelector(getProfileData);
  const readonly = useSelector(getProfileReadonly);
  const dispatch = useAppDispatch();
  const canEdit = authData?.id === profileData?.id;

  const onEdit = useCallback(() => {
    dispatch(profileActions.setReadonly(false))
  }, [ dispatch ]);

  const onCancelEdit = useCallback(() => {
    dispatch(profileActions.cancelEdit())
  }, [ dispatch ]);

  const onSave = useCallback(() => {
    dispatch(updateProfileData())
  }, [ dispatch ]);

  return (
    <HStack max justify="between" className={ classNames('', {}, [ className ])}>
      <Text title={ t('Профиль') } />
      { canEdit && (
        <>
          { readonly
            ? (
              <Button
                theme={ EButtonTheme.OUTLINE }
                onClick={ onEdit }
              >
                { t('Редактировать') }
              </Button>)
            : (
              <HStack gap="8">
                <Button
                  theme={ EButtonTheme.OUTLINE_RED }
                  onClick={ onCancelEdit }
                >
                  { t('Отменить') }
                </Button>
                <Button
                  theme={ EButtonTheme.OUTLINE }
                  onClick={ onSave }
                >
                  { t('Сохранить') }
                </Button>
              </HStack>)
          }
        </>
      )}
    </HStack>
  );
};
