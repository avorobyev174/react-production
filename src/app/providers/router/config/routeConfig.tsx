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
import { AppRoute, RoutePath } from '@/shared/const/router';
import { type TAppRouteProps } from '@/shared/types/router';

export const routeConfig: Record<AppRoute, TAppRouteProps> = {
  [ AppRoute.MAIN ]: {
    path: RoutePath.main,
    element: <MainPage />,
  },
  [ AppRoute.ABOUT ]: {
    path: RoutePath.about,
    element: <AboutPage />,
  },
  [ AppRoute.PROFILE ]: {
    path: `${ RoutePath.profile }:id`,
    element: <ProfilePage />,
    authOnly: true,
  },
  [ AppRoute.ARTICLES ]: {
    path: RoutePath.articles,
    element: <ArticlesPage />,
    authOnly: true,
  },
  [ AppRoute.ARTICLE_DETAILS ]: {
    path: `${ RoutePath.article_details }:id`,
    element: <ArticleDetailsPage />,
    authOnly: true,
  },
  [ AppRoute.ARTICLE_CREATE ]: {
    path: `${ RoutePath.article_create }`,
    element: <ArticleEditPage />,
    authOnly: true,
  },
  [ AppRoute.ARTICLE_EDIT ]: {
    path: `${ RoutePath.article_edit }`,
    element: <ArticleEditPage />,
    authOnly: true,
  },
  [ AppRoute.ADMIN_PANEL ]: {
    path: `${ RoutePath.admin_panel }`,
    element: <AdminPanelPage />,
    authOnly: true,
    roles: [ EUserRole.ADMIN, EUserRole.MANAGER ],
  },
  [ AppRoute.NOT_FOUND ]: {
    path: RoutePath.not_found,
    element: <NotFoundPage />,
  },
  [ AppRoute.FORBIDDEN ]: {
    path: RoutePath.forbidden,
    element: <ForbiddenPage />,
  },
}
