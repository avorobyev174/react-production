import { type RouteProps } from 'react-router-dom';
import { MainPage } from 'pages/main-page';
import { AboutPage } from 'pages/about-page';
import { NotFoundPage } from 'pages/not-found';

export enum AppRoute {
  MAIN = 'main',
  ABOUT = 'about',
  NOT_FOUND = 'not_found',
}

export const RoutePath: Record<AppRoute, string> = {
  [ AppRoute.MAIN ]: '/',
  [ AppRoute.ABOUT ]: '/about',
  [ AppRoute.NOT_FOUND ]: '*'
}

export const routeConfig: Record<AppRoute, RouteProps> = {
  [ AppRoute.MAIN ]: {
    path: RoutePath.main,
    element: <MainPage />
  },
  [ AppRoute.ABOUT ]: {
    path: RoutePath.about,
    element: <AboutPage />
  },
  [ AppRoute.NOT_FOUND ]: {
    path: RoutePath.not_found,
    element: <NotFoundPage />
  }
}
