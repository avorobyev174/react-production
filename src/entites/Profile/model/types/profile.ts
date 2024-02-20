import { type ECountry } from 'entites/Country';
import { type ECurrency } from 'entites/Currency';

export interface IProfile {
  id?: string;
  first?: string,
  lastname?: string,
  age?: number,
  currency?: ECurrency,
  country?: ECountry
  city?: string,
  username?: string,
  avatar?: string
}
