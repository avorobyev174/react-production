import type { IProfile } from 'entites/Profile';
import type { EValidateProfileError } from 'features/editableProfileCard/model/const/const';

export interface IProfileSchema {
  data?: IProfile,
  form?: IProfile,
  isLoading: boolean,
  error?: string,
  readonly: boolean;
  validateErrors?: EValidateProfileError[];
}
