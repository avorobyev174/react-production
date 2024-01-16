import { type ICounterSchema } from 'entites/Counter';
import { type IUserSchema } from 'entites/User';
import { type ILoginSchema } from 'features/AuthByUserName';

export interface IStateSchema {
  counter: ICounterSchema,
  user: IUserSchema,
  loginForm?: ILoginSchema
}
