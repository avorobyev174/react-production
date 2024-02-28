import type { IProfile } from '@/entities/Profile';
import type { EValidateProfileError } from '@/features/editableProfileCard/model/const/const';

export interface IProfileSchema {
  data?: IProfile,
  form?: IProfile,
  isLoading: boolean,
  error?: string,
  readonly: boolean;
  validateErrors?: EValidateProfileError[];
}
