import { createSelector } from '@reduxjs/toolkit';
import { getUserAuthData } from '@/entities/User';
import { RoutePath } from '@/shared/config/RouteConfig/routeConfig';
import MainIcon from '@/shared/assets/icons/main-20-20.svg';
import AboutIcon from '@/shared/assets/icons/about-20-20.svg';
import ProfileIcon from '@/shared/assets/icons/profile-20-20.svg';
import ArticleIcon from '@/shared/assets/icons/article-20-20.svg';
import { type ISideBarItem } from '@/widgets/Sidebar/model/types/sidebar';

export const getSidebarItems = createSelector(
  getUserAuthData,
  (userData) => {
    const sidebarItemList: ISideBarItem[] = [
      {
        path: RoutePath.main,
        Icon: MainIcon,
        text: 'Главная'
      },
      {
        path: RoutePath.about,
        Icon: AboutIcon,
        text: 'О сайте'
      },
    ]

    if (userData) {
      sidebarItemList.push({
        path: RoutePath.profile + userData.id,
        Icon: ProfileIcon,
        text: 'Профиль',
        authOnly: true
      });

      sidebarItemList.push({
        path: RoutePath.articles,
        Icon: ArticleIcon,
        text: 'Cтатьи',
        authOnly: true
      });
    }

    return sidebarItemList;
  }
)
