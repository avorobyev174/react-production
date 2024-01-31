import { classNames } from 'shared/lib/classNames/classNames';
import styles from './ProfilePageHeader.module.scss'
import { useTranslation } from 'react-i18next';
import { Text } from 'shared/ui/Text/Text';
import { Button, EButtonTheme } from 'shared/ui/Button/Button';
import { useSelector } from 'react-redux';
import { getProfileReadonly } from 'entites/Profile/model/selectors/getProfileReadonly/getProfileReadonly';
import { useCallback } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { profileActions, updateProfileData } from 'entites/Profile';

interface IProfilePageHeaderProps {
  className?: string;
}

export const ProfilePageHeader = ({ className }: IProfilePageHeaderProps) => {
  const { t } = useTranslation('profile');
  const readonly = useSelector(getProfileReadonly);
  const dispatch = useAppDispatch();

  const onEdit = useCallback(() => {
    dispatch(profileActions.setReadonly(false))
  }, [ dispatch ]);

  const onCancelEdit = useCallback(() => {
    dispatch(profileActions.cancelEdit(true))
  }, [ dispatch ]);

  const onSave = useCallback(() => {
    dispatch(updateProfileData())
  }, [ dispatch ]);

  return (
    <div className={ classNames(styles.ProfilePageHeader, {}, [ className ])}>
      <Text title={ t('Профиль') } />
      { readonly
        ? (
          <Button
            className={ styles.editButton }
            theme={ EButtonTheme.OUTLINE }
            onClick={ onEdit }
          >
            { t('Редактировать') }
          </Button>)
        : (
          <>
            <Button
              className={ styles.editButton }
              theme={ EButtonTheme.OUTLINE_RED }
              onClick={ onCancelEdit }
            >
              { t('Отменить') }
            </Button>
            <Button
              className={ styles.saveButton }
              theme={ EButtonTheme.OUTLINE }
              onClick={ onSave }
            >
              { t('Сохранить') }
            </Button>
          </>)
      }
    </div>
  );
};
