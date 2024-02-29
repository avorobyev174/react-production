import { type RouteProps } from 'react-router-dom';
import { MainPage } from '@/pages/main-page';
import { AboutPage } from '@/pages/about-page';
import { NotFoundPage } from '@/pages/not-found';
import { ProfilePage } from '@/pages/profile-page';
import { ArticlesPage } from '@/pages/ArticlesPage';
import { ArticleDetailsPage } from '@/pages/article-details-page';
import { ArticleEditPage } from '@/pages/article-edit-page';
import { AdminPanelPage } from '@/pages/AdminPanelPage';
import { EUserRole } from '@/entities/User';
import { ForbiddenPage } from '@/pages/ForbiddenPage';

export type TAppRouteProps = RouteProps & {
  authOnly?: boolean;
  roles?: EUserRole[];
}

export enum AppRoute {
  MAIN = 'main',
  ABOUT = 'about',
  PROFILE = 'profile',
  NOT_FOUND = 'not_found',
  ARTICLES = 'articles',
  ARTICLE_DETAILS = 'article_details',
  ARTICLE_CREATE = 'article_create',
  ARTICLE_EDIT = 'article_edit',
  ADMIN_PANEL = 'admin_panel',
  FORBIDDEN = 'forbidden',
}

export const RoutePath: Record<AppRoute, string> = {
  [ AppRoute.MAIN ]: '/',
  [ AppRoute.ABOUT ]: '/about',
  [ AppRoute.PROFILE ]: '/profile/', // +id
  [ AppRoute.ARTICLES ]: '/articles',
  [ AppRoute.ARTICLE_DETAILS ]: '/articles/', // +id
  [ AppRoute.ARTICLE_CREATE ]: '/articles/new',
  [ AppRoute.ARTICLE_EDIT ]: '/articles/:id/edit',
  [ AppRoute.ADMIN_PANEL ]: '/admin',
  [ AppRoute.FORBIDDEN ]: '/forbidden',
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
    path: `${ RoutePath.profile }:id`,
    element: <ProfilePage />,
    authOnly: true
  },
  [ AppRoute.ARTICLES ]: {
    path: RoutePath.articles,
    element: <ArticlesPage />,
    authOnly: true
  },
  [ AppRoute.ARTICLE_DETAILS ]: {
    path: `${ RoutePath.article_details }:id`,
    element: <ArticleDetailsPage />,
    authOnly: true
  },
  [ AppRoute.ARTICLE_CREATE ]: {
    path: `${ RoutePath.article_create }`,
    element: <ArticleEditPage />,
    authOnly: true
  },
  [ AppRoute.ARTICLE_EDIT ]: {
    path: `${ RoutePath.article_edit }`,
    element: <ArticleEditPage />,
    authOnly: true
  },
  [ AppRoute.ADMIN_PANEL ]: {
    path: `${ RoutePath.admin_panel }`,
    element: <AdminPanelPage />,
    authOnly: true,
    roles: [ EUserRole.ADMIN, EUserRole.MANAGER ]
  },
  [ AppRoute.NOT_FOUND ]: {
    path: RoutePath.not_found,
    element: <NotFoundPage />
  },
  [ AppRoute.FORBIDDEN ]: {
    path: RoutePath.forbidden,
    element: <ForbiddenPage />
  }
}
