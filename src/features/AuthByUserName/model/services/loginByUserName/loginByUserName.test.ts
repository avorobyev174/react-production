import axios from 'axios';
import { loginByUserName } from 'features/AuthByUserName/model/services/loginByUserName/loginByUserName';
import { userActions } from 'entites/User';
import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';

jest.mock('axios');
const mockedAxios = jest.mocked(axios, true);

describe('loginByUserName test', () => {
  test('success login', async () => {
    const userValue = { username: 'test', id: '1' };
    mockedAxios.post.mockReturnValue(Promise.resolve({ data: userValue }));

    const thunk = new TestAsyncThunk(loginByUserName);
    const res = await thunk.callThunk({ username: '123', password: '123' });

    expect(thunk.dispatch).toHaveBeenCalledWith(userActions.setAuthData(userValue))
    expect(thunk.dispatch).toHaveBeenCalledTimes(3)
    // eslint-disable-next-line @typescript-eslint/unbound-method
    expect(mockedAxios.post).toHaveBeenCalled();
    expect(res.meta.requestStatus).toBe('fulfilled');
    expect(res.payload).toBe(userValue);
  })

  test('error login', async () => {
    mockedAxios.post.mockReturnValue(Promise.resolve({ status: 403 }));

    const thunk = new TestAsyncThunk(loginByUserName);
    const res = await thunk.callThunk({ username: '123', password: '123' });

    expect(thunk.dispatch).toHaveBeenCalledTimes(2)
    // eslint-disable-next-line @typescript-eslint/unbound-method
    expect(mockedAxios.post).toHaveBeenCalled();
    expect(res.meta.requestStatus).toBe('rejected');
    expect(res.payload).toBe('error');
  })
})
