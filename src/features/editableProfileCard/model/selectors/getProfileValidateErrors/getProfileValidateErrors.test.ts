import { type IStateSchema } from '@/app/providers/StoreProvider';
import { getProfileValidateErrors } from './getProfileValidateErrors';
import { EValidateProfileError } from '../../const/const';

describe('getProfileValidateErrors test', () => {
  test('should return value', () => {
    const state: DeepPartial<IStateSchema> = {
      profile: {
        validateErrors: [
          EValidateProfileError.SERVER_ERROR,
          EValidateProfileError.INCORRECT_AGE
        ]
      }
    }
    expect(getProfileValidateErrors(state as IStateSchema)).toEqual([
      EValidateProfileError.SERVER_ERROR,
      EValidateProfileError.INCORRECT_AGE
    ]);
  })

  test('should work with empty state', () => {
    const state: DeepPartial<IStateSchema> = {}
    expect(getProfileValidateErrors(state as IStateSchema)).toBe(undefined);
  })
})
