import { type RouteProps } from 'react-router-dom';
import { MainPage } from 'pages/main-page';
import { AboutPage } from 'pages/about-page';
import { NotFoundPage } from 'pages/not-found';
import { ProfilePage } from 'pages/profile-page';

export type TAppRouteProps = RouteProps & {
  authOnly?: boolean;
}

export enum AppRoute {
  MAIN = 'main',
  ABOUT = 'about',
  PROFILE = 'profile',
  NOT_FOUND = 'not_found',
}

export const RoutePath: Record<AppRoute, string> = {
  [ AppRoute.MAIN ]: '/',
  [ AppRoute.ABOUT ]: '/about',
  [ AppRoute.PROFILE ]: '/profile',
  // last
  [ AppRoute.NOT_FOUND ]: '*'
}

export const routeConfig: Record<AppRoute, TAppRouteProps> = {
  [ AppRoute.MAIN ]: {
    path: RoutePath.main,
    element: <MainPage />
  },
  [ AppRoute.ABOUT ]: {
    path: RoutePath.about,
    element: <AboutPage />
  },
  [ AppRoute.PROFILE ]: {
    path: RoutePath.profile,
    element: <ProfilePage />,
    authOnly: true
  },
  [ AppRoute.NOT_FOUND ]: {
    path: RoutePath.not_found,
    element: <NotFoundPage />
  }
}
