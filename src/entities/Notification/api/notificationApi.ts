import { rtkApi } from '@/shared/api/rtkApi';
import { type INotification } from '@/entities/Notification/model/types/notifications';

const notificationsApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    getNotifications: build.query<INotification[], null>({
      query: () => ({
        url: '/notifications',
      }),
    }),
  }),
});

export const useNotifications = notificationsApi.useGetNotificationsQuery;
