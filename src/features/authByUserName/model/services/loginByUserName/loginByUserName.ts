import { createAsyncThunk } from '@reduxjs/toolkit';
import { type IUser, userActions } from '@/entities/User';
import { USER_LOCAL_STORAGE_KEY } from '@/shared/const/localStorage';
import { type IThunkConfig } from '@/app/providers/StoreProvider';

interface ILoginByUserNameProps {
  username: string;
  password: string;
}

export const loginByUserName = createAsyncThunk<
  IUser,
  ILoginByUserNameProps,
  IThunkConfig<string>
>('login/loginByUserName', async (authData, thunkAPI) => {
  const { dispatch, extra, rejectWithValue } = thunkAPI;

  try {
    const response = await extra.api.post<IUser>('/login', authData);
    if (!response.data) {
      throw new Error();
    }

    dispatch(userActions.setAuthData(response.data));

    return response.data;
  } catch (e) {
    return rejectWithValue('error');
  }
});
