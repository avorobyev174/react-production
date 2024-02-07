import { type IUser } from 'entites/User';

export interface IComment {
  id: string;
  user: IUser;
  text: string;
}
