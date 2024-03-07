import { createAsyncThunk } from '@reduxjs/toolkit';
import { type IThunkConfig } from '@/app/providers/StoreProvider';
import { getUserDataByIdQuery } from '../api/userApi';
import { IUser } from '../model/types/user';
import { USER_LOCAL_STORAGE_KEY } from '@/shared/const/localStorage';

export const initAuthData = createAsyncThunk<IUser, void, IThunkConfig<string>>(
  'user/initAuthData',
  async (_, thunkAPI) => {
    const { extra, rejectWithValue, dispatch } = thunkAPI;
    const userId = localStorage.getItem(USER_LOCAL_STORAGE_KEY);
    console.log(userId);
    if (!userId) {
      return rejectWithValue('error');
    }
    try {
      const response = await dispatch(
        getUserDataByIdQuery(JSON.parse(userId)),
      ).unwrap();
      if (!response.jsonSettings) {
        return rejectWithValue('error');
      }
      return response;
    } catch (e) {
      return rejectWithValue('error');
    }
  },
);
