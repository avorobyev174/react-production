import { classNames } from '@/shared/lib/classNames/classNames';
import { AppRouter } from '@/app/providers/router';
import { NavBar } from '@/widgets/Navbar';
import { useTheme } from '@/app/providers/ThemeProvider';
import { Sidebar } from '@/widgets/Sidebar';
import React, { Suspense, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { getUserInited, userActions } from '@/entities/User';

const App = () => {
  const { theme } = useTheme()
  const { t } = useTranslation()
  const dispatch = useDispatch();
  const inited = useSelector(getUserInited);

  useEffect(() => {
    dispatch(userActions.initAuthData())
  }, [ dispatch ])

  return (
    <div className={ classNames('app', {}, [ theme ]) }>
      <NavBar />
      <Suspense fallback={ <div className="content-page">{ t('Загрузка') }</div> }>
        <div className="content-page">
          <Sidebar />
          { inited && <AppRouter /> }
        </div>
      </Suspense>
    </div>
  );
};

export default App;
