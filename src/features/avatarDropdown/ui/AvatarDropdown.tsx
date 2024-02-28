import { classNames } from '@/shared/lib/classNames/classNames';
import React, { memo, useCallback } from 'react';
import { RoutePath } from '@/shared/config/RouteConfig/routeConfig';
import { Avatar } from '@/shared/ui/Avatar/Avatar';
import { Dropdown } from '@/shared/ui/Popups';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { getUserAuthData, isUserAdmin, isUserManager, userActions } from '@/entities/User';

interface IAvatarDropdownProps {
  className?: string;
}

export const AvatarDropdown = memo((props: IAvatarDropdownProps) => {
  const { className } = props;
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const authData = useSelector(getUserAuthData);
  const isAdmin = useSelector(isUserAdmin);
  const isManager = useSelector(isUserManager);
  const isAdminPanelAvailable = isAdmin || isManager;

  const onLogout = useCallback(() => {
    dispatch(userActions.logout());
  }, [ dispatch ]);

  if (!authData) {
    return null;
  }

  return (
    <Dropdown
      className={ classNames('', {}, [ className ]) }
      direction="bottom left"
      items={ [
        ...(
          isAdminPanelAvailable
            ? [ { content: t('Админка'), href: RoutePath.admin_panel } ]
            : []
        ),
        {
          content: t('Профиль'),
          href: RoutePath.profile + authData.id
        },
        {
          content: t('Выйти'),
          onClick: onLogout
        }
      ]}
      trigger={ <Avatar size={ 30 } src={ authData.avatar }/> }
    />
  );
});
