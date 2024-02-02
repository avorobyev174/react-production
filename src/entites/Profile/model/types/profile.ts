import { type ECountry } from 'entites/Country';
import { type ECurrency } from 'entites/Currency';

export interface IProfile {
  first?: string,
  lastname?: string,
  age?: number,
  currency?: ECurrency,
  country?: ECountry
  city?: string,
  username?: string,
  avatar?: string
}

export interface IProfileSchema {
  data?: IProfile,
  form?: IProfile,
  isLoading: boolean,
  error?: string,
  readonly: boolean;
  validateErrors?: EValidateProfileError[];
}

export enum EValidateProfileError {
  INCORRECT_USER_DATA = 'INCORRECT_USER_DATA',
  INCORRECT_AGE = 'INCORRECT_AGE',
  INCORRECT_COUNTRY = 'INCORRECT_COUNTRY',
  NO_DATA = 'NO_DATA',
  SERVER_ERROR = 'SERVER_ERROR',
}
