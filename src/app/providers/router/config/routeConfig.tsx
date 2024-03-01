import { MainPage } from '@/pages/main-page';
import { AboutPage } from '@/pages/about-page';
import { ProfilePage } from '@/pages/profile-page';
import { ArticlesPage } from '@/pages/ArticlesPage';
import { ArticleDetailsPage } from '@/pages/article-details-page';
import { ArticleEditPage } from '@/pages/article-edit-page';
import { AdminPanelPage } from '@/pages/AdminPanelPage';
import { EUserRole } from '@/entities/User';
import { NotFoundPage } from '@/pages/not-found';
import { ForbiddenPage } from '@/pages/ForbiddenPage';
import {
  AppRoute,
  getRouteAbout, getRouteAdmin, getRouteArticleCreate, getRouteArticleEdit, getRouteForbidden,
  getRouteArticles, getRouteArticlesDetails,
  getRouteMain,
  getRouteProfile,
} from '@/shared/const/router';
import { type TAppRouteProps } from '@/shared/types/router';

export const routeConfig: Record<AppRoute, TAppRouteProps> = {
  [ AppRoute.MAIN ]: {
    path: getRouteMain(),
    element: <MainPage />,
  },
  [ AppRoute.ABOUT ]: {
    path: getRouteAbout(),
    element: <AboutPage />,
  },
  [ AppRoute.PROFILE ]: {
    path: getRouteProfile(':id'),
    element: <ProfilePage />,
    authOnly: true,
  },
  [ AppRoute.ARTICLES ]: {
    path: getRouteArticles(),
    element: <ArticlesPage />,
    authOnly: true,
  },
  [ AppRoute.ARTICLE_DETAILS ]: {
    path: getRouteArticlesDetails(':id'),
    element: <ArticleDetailsPage />,
    authOnly: true,
  },
  [ AppRoute.ARTICLE_CREATE ]: {
    path: getRouteArticleCreate(),
    element: <ArticleEditPage />,
    authOnly: true,
  },
  [ AppRoute.ARTICLE_EDIT ]: {
    path: getRouteArticleEdit(':id'),
    element: <ArticleEditPage />,
    authOnly: true,
  },
  [ AppRoute.ADMIN_PANEL ]: {
    path: getRouteAdmin(),
    element: <AdminPanelPage />,
    authOnly: true,
    roles: [ EUserRole.ADMIN, EUserRole.MANAGER ],
  },
  [ AppRoute.NOT_FOUND ]: {
    path: '*',
    element: <NotFoundPage />,
  },
  [ AppRoute.FORBIDDEN ]: {
    path: getRouteForbidden(),
    element: <ForbiddenPage />,
  },
}
