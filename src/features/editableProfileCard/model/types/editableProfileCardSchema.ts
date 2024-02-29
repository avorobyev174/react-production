import type { IProfile } from '@/entities/Profile';
import type { EValidateProfileError } from '../../model/const/const';

export interface IProfileSchema {
  data?: IProfile,
  form?: IProfile,
  isLoading: boolean,
  error?: string,
  readonly: boolean;
  validateErrors?: EValidateProfileError[];
}
