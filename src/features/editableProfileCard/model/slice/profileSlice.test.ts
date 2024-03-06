import { ECurrency } from '@/entities/Currency';
import { ECountry } from '@/entities/Country';
import { EValidateProfileError } from '../../model/const/const';
import { type IProfileSchema } from '../../model/types/editableProfileCardSchema';
import { profileActions, profileReducer } from '../../model/slice/profileSlice';
import { updateProfileData } from '../../model/services/updateProfileData/updateProfileData';

const data = {
  username: 'av',
  age: 28,
  country: ECountry.RUSSIA,
  lastname: 'vorob',
  first: 'alex',
  city: 'mgn',
  currency: ECurrency.EUR,
};

describe('profileSlice test', () => {
  test('test set readonly', () => {
    const state: DeepPartial<IProfileSchema> = { readonly: false };
    expect(
      profileReducer(state as IProfileSchema, profileActions.setReadonly(true)),
    ).toEqual({ readonly: true });
  });

  test('test cancel edit', () => {
    const state: DeepPartial<IProfileSchema> = { data, form: { username: '' } };
    expect(
      profileReducer(state as IProfileSchema, profileActions.cancelEdit()),
    ).toEqual({
      readonly: true,
      validateErrors: undefined,
      data,
      form: data,
    });
  });

  test('test update profile', () => {
    const state: DeepPartial<IProfileSchema> = { form: { username: '123' } };
    expect(
      profileReducer(
        state as IProfileSchema,
        profileActions.updateProfile({
          username: '123456',
        }),
      ),
    ).toEqual({
      form: { username: '123456' },
    });
  });

  test('test update profile pending', () => {
    const state: DeepPartial<IProfileSchema> = {
      isLoading: false,
      validateErrors: [EValidateProfileError.SERVER_ERROR],
    };
    expect(
      profileReducer(state as IProfileSchema, updateProfileData.pending),
    ).toEqual({
      isLoading: true,
      validateErrors: undefined,
    });
  });

  test('test update profile fulfilled', () => {
    const state: DeepPartial<IProfileSchema> = {
      isLoading: true,
    };
    expect(
      profileReducer(
        state as IProfileSchema,
        updateProfileData.fulfilled(data, '', undefined, ''),
      ),
    ).toEqual({
      isLoading: false,
      readonly: true,
      validateErrors: undefined,
      form: data,
      data,
    });
  });
});
