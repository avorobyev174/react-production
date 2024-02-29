import type { EUserRole } from '../const/const';

export interface IUser {
  id: string;
  username: string;
  avatar?: string;
  roles?: EUserRole[]
}

export interface IUserSchema {
  authData?: IUser;
  _inited: boolean;
}
