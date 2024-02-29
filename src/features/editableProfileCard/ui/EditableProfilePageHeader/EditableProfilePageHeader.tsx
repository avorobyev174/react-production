import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useCallback } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Text } from '@/shared/ui/Text';
import { Button, EButtonTheme } from '@/shared/ui/Button';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { getUserAuthData } from '@/entities/User';
import { HStack } from '@/shared/ui/Stack';
import { getProfileData } from '../../model/selectors/getProfileData/getProfileData';
import { getProfileReadonly } from '../../model/selectors/getProfileReadonly/getProfileReadonly';
import { profileActions } from '../../model/slice/profileSlice';
import { updateProfileData } from '../../model/services/updateProfileData/updateProfileData';

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
    <HStack max justify="between" className={classNames('', {}, [ className ])}>
      <Text title={t('Профиль')} />
      { canEdit && (
        <>
          { readonly
            ? (
              <Button
                theme={EButtonTheme.OUTLINE}
                onClick={onEdit}
                data-testid="EditableProfilePageHeader.EditButton"
              >
                { t('Редактировать') }
              </Button>
            )
            : (
              <HStack gap="8">
                <Button
                  theme={EButtonTheme.OUTLINE_RED}
                  onClick={onCancelEdit}
                  data-testid="EditableProfilePageHeader.CancelButton"
                >
                  { t('Отменить') }
                </Button>
                <Button
                  theme={EButtonTheme.OUTLINE}
                  onClick={onSave}
                  data-testid="EditableProfilePageHeader.SaveButton"
                >
                  { t('Сохранить') }
                </Button>
              </HStack>
            )}
        </>
      )}
    </HStack>
  );
};
