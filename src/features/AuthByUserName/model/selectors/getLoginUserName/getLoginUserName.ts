import { type IStateSchema } from '@/app/providers/StoreProvider';

export const getLoginUserName = (state: IStateSchema) => state?.loginForm?.username || '';
