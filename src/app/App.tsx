import './styles/index.scss'
import { classNames } from 'shared/lib/classNames/classNames';
import { AppRouter } from 'app/providers/router';
import { NavBar } from 'widgets/Navbar';
import { useTheme } from 'app/providers/ThemeProvider';
import { Sidebar } from 'widgets/Sidebar';
import React, { Suspense } from 'react';

const App = () => {
  const { theme } = useTheme()

  return (
    <div className={ classNames('app', {}, [ theme ]) }>
      <NavBar />
      <Suspense fallback={ <div>Loading...</div> }>
        <div className="content-page">
          <Sidebar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  );
};

export default App;
