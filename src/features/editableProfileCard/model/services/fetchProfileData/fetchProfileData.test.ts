import { fetchProfileData } from './fetchProfileData';
import { TestAsyncThunk } from '@/shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { ECountry } from '@/entities/Country';
import { ECurrency } from '@/entities/Currency';

const data = {
  username: 'av',
  age: 28,
  country: ECountry.RUSSIA,
  lastname: 'vorob',
  first: 'alex',
  city: 'mgn',
  currency: ECurrency.EUR,
};

describe('fetchProfileData test', () => {
  test('success', async () => {
    const thunk = new TestAsyncThunk(fetchProfileData);
    thunk.api.get.mockReturnValue(Promise.resolve({ data }));

    const res = await thunk.callThunk('1');

    // eslint-disable-next-line @typescript-eslint/unbound-method
    expect(thunk.api.get).toHaveBeenCalled();
    expect(res.meta.requestStatus).toBe('fulfilled');
    expect(res.payload).toEqual(data);
  });

  test('error', async () => {
    const thunk = new TestAsyncThunk(fetchProfileData);
    thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }));
    const res = await thunk.callThunk('1');

    expect(res.meta.requestStatus).toBe('rejected');
  });
});
