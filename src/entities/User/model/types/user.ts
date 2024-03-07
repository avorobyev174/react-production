import type { EUserRole } from '../const/const';
import { IFeatureFlags } from '@/shared/types/featureFlags';

export interface IUser {
  id: string;
  username: string;
  avatar?: string;
  roles?: EUserRole[];
  features?: IFeatureFlags;
}

export interface IUserSchema {
  authData?: IUser;
  _inited: boolean;
}
