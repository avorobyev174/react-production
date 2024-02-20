import { updateProfileData } from './updateProfileData';
import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { ECountry } from 'entites/Country';
import { ECurrency } from 'entites/Currency';

import { EValidateProfileError } from 'features/editableProfileCard';

const data = {
  username: 'av',
  age: 28,
  country: ECountry.RUSSIA,
  lastname: 'vorob',
  first: 'alex',
  city: 'mgn',
  currency: ECurrency.EUR,
}

describe('updateProfileData test', () => {
  test('success', async () => {
    const thunk = new TestAsyncThunk(updateProfileData, {
      profile: {
        form: data,
        isLoading: false,
        readonly: false
      }
    });
    thunk.api.put.mockReturnValue(Promise.resolve({ data }));

    const res = await thunk.callThunk(undefined);

    // eslint-disable-next-line @typescript-eslint/unbound-method
    expect(thunk.api.put).toHaveBeenCalled();
    expect(res.meta.requestStatus).toBe('fulfilled');
    expect(res.payload).toEqual(data);
  })

  test('error', async () => {
    const thunk = new TestAsyncThunk(updateProfileData, {
      profile: {
        form: data,
        isLoading: false,
        readonly: false
      }
    });
    thunk.api.put.mockReturnValue(Promise.resolve({ status: 403 }));
    const res = await thunk.callThunk(undefined);

    expect(res.meta.requestStatus).toBe('rejected');
    expect(res.payload).toEqual([ EValidateProfileError.SERVER_ERROR ]);
  })

  test('validate error', async () => {
    const thunk = new TestAsyncThunk(updateProfileData, {
      profile: {
        form: { ...data, lastname: '' },
        isLoading: false,
        readonly: false
      }
    });
    thunk.api.put.mockReturnValue(Promise.resolve({ status: 403 }));
    const res = await thunk.callThunk(undefined);

    expect(res.meta.requestStatus).toBe('rejected');
    expect(res.payload).toEqual([ EValidateProfileError.INCORRECT_USER_DATA ]);
  })
})
