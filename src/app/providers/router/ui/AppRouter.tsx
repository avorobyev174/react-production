import React, { memo, Suspense, useCallback } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routeConfig, type TAppRouteProps } from 'shared/config/RouteConfig/routeConfig';
import { PageLoader } from 'widgets/PageLoader';
import { RequireAuth } from 'app/providers/ErrorBoundary/ui/RequireAuth';

const AppRouter = () => {
  const renderWithWrapper = useCallback((route: TAppRouteProps) => {
    const element = (
      <Suspense fallback={ <PageLoader/> }>
        <div className="page-wrapper">
          { route.element }
        </div>
      </Suspense>
    )

    return <Route
      key={ route.path }
      path={ route.path }
      element={
        route.authOnly
          ? <RequireAuth>{ element }</RequireAuth>
          : element
      }
    />;
  }, []);

  return (
    <Routes>
      { Object.values(routeConfig).map(renderWithWrapper) }
    </Routes>
  );
};

export default memo(AppRouter);
