import type { EUserRole } from '../const/const';
import { IFeatureFlags } from '@/shared/types/featureFlags';
import { IJsonSettings } from './jsonSettings';

export interface IUser {
  id: string;
  username: string;
  avatar?: string;
  roles?: EUserRole[];
  features?: IFeatureFlags;
  jsonSettings?: IJsonSettings;
}

export interface IUserSchema {
  authData?: IUser;
  _inited: boolean;
}
