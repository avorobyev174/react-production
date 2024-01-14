import { type ICounterSchema } from 'entites/Counter';
import { type IUserSchema } from 'entites/User';

export interface IStateSchema {
  counter: ICounterSchema,
  user: IUserSchema
}
