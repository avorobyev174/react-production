import { type RouteProps } from 'react-router-dom';
import { MainPage } from 'pages/main-page';
import { AboutPage } from 'pages/about-page';
import { NotFoundPage } from 'pages/not-found';
import { ProfilePage } from 'pages/profile-page';
import { ArticlesPage } from 'pages/articles-page';
import { ArticleDetailsPage } from 'pages/article-details-page';

export type TAppRouteProps = RouteProps & {
  authOnly?: boolean;
}

export enum AppRoute {
  MAIN = 'main',
  ABOUT = 'about',
  PROFILE = 'profile',
  NOT_FOUND = 'not_found',
  ARTICLES = 'articles',
  ARTICLE_DETAILS = 'article_details',
}

export const RoutePath: Record<AppRoute, string> = {
  [ AppRoute.MAIN ]: '/',
  [ AppRoute.ABOUT ]: '/about',
  [ AppRoute.PROFILE ]: '/profile',
  [ AppRoute.ARTICLES ]: '/articles',
  [ AppRoute.ARTICLE_DETAILS ]: '/articles/', // +id
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
  [ AppRoute.NOT_FOUND ]: {
    path: RoutePath.not_found,
    element: <NotFoundPage />
  }
}
