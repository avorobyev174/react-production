import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routeConfig } from 'shared/config/RouteConfig/RouteConfig';
import { useTranslation } from 'react-i18next';

const AppRouter = () => {
  const { t } = useTranslation()

  return (
    <Suspense fallback={ <div className="page-wrapper">{ t('Загрузка') }</div> }>
      <div className="page-wrapper">
        <Routes>
          { Object.values(routeConfig).map(({ element, path }) => (
            <Route key={ path } path={ path } element={ element }/>
          )) }
        </Routes>
      </div>
    </Suspense>
  );
};

export default AppRouter;
