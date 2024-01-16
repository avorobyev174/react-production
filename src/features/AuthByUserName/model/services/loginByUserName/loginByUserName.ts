import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { type IUser, userActions } from 'entites/User';
import { USER_LOCAL_STORAGE_KEY } from 'shared/const/localStorage';

interface ILoginByUserNameProps {
  username: string;
  password: string;
}

export const loginByUserName = createAsyncThunk<IUser, ILoginByUserNameProps, { rejectValue: string }>(
  'login/loginByUserName',
  async (authData, thunkAPI) => {
    try {
      const response = await axios.post<IUser>('http://localhost:8000/login', authData);
      if (!response.data) {
        throw new Error();
      }

      localStorage.setItem(USER_LOCAL_STORAGE_KEY, JSON.stringify(response.data));
      thunkAPI.dispatch(userActions.setAuthData(response.data));

      return response.data
    } catch (e) {
      console.log(e)
      return thunkAPI.rejectWithValue('error');
    }
  }
)
