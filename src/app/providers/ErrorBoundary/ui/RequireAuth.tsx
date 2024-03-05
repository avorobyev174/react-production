import { useSelector } from 'react-redux';
import { useLocation, Navigate } from 'react-router-dom';
import { useMemo } from 'react';
import { type EUserRole, getUserAuthData, getUserRoles } from '@/entities/User';
import { getRouteForbidden, getRouteMain } from '@/shared/const/router';

interface RequireAuthProps {
  children: JSX.Element,
  roles?: EUserRole[];
}

export const RequireAuth = ({ children, roles }: RequireAuthProps) => {
  const auth = useSelector(getUserAuthData);
  const location = useLocation();
  const userRoles = useSelector(getUserRoles);

  const hasRequireRoles = useMemo(() => {
    if (!roles) {
      return true;
    }

    return roles.some((requiredRoles) => userRoles?.includes(requiredRoles))
  }, [ roles, userRoles ])

  if (!auth) {
    return <Navigate to={ getRouteMain() } state={{ from: location }} replace />
  }

  if (!hasRequireRoles) {
    return <Navigate to={ getRouteForbidden() } state={{ from: location }} replace />
  }

  return children;
}
