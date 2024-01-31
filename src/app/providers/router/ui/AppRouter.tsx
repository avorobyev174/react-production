import React, { memo, Suspense, useMemo } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routeConfig } from 'shared/config/RouteConfig/RouteConfig';
import { PageLoader } from 'widgets/PageLoader';
import { useSelector } from 'react-redux';
import { getUserAuthData } from 'entites/User';

const AppRouter = () => {
  const isAuth = useSelector(getUserAuthData);
  const routes = useMemo(() => {
    return Object.values(routeConfig).filter(({ authOnly }) => !(authOnly && !isAuth))
  }, [ isAuth ])

  return (
    <Routes>
      { routes.map(({ element, path }) => (
        <Route key={ path } path={ path } element={(
          <Suspense fallback={ <PageLoader /> }>
            <div className="page-wrapper">
              { element }
            </div>
          </Suspense>
        )}/>
      )) }
    </Routes>
  );
};

export default memo(AppRouter);
