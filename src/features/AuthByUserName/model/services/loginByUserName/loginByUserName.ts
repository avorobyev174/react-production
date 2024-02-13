import { createAsyncThunk } from '@reduxjs/toolkit';
import { type IUser, userActions } from 'entites/User';
import { USER_LOCAL_STORAGE_KEY } from 'shared/const/localStorage';
import { type IThunkConfig } from 'app/providers/StoreProvider';

interface ILoginByUserNameProps {
  username: string;
  password: string;
}

export const loginByUserName = createAsyncThunk<IUser, ILoginByUserNameProps, IThunkConfig<string>>(
  'login/loginByUserName',
  async (authData, thunkAPI) => {
    const { dispatch, extra, rejectWithValue } = thunkAPI;

    try {
      const response = await extra.api.post<IUser>('/login', authData);
      if (!response.data) {
        throw new Error();
      }

      localStorage.setItem(USER_LOCAL_STORAGE_KEY, JSON.stringify(response.data));
      dispatch(userActions.setAuthData(response.data));
      // extra.navigate && extra.navigate('/about');

      return response.data
    } catch (e) {
      console.log(e)
      return rejectWithValue('error');
    }
  }
)
