import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { type IUser, type IUserSchema } from '../types/user';
import { USER_LOCAL_STORAGE_KEY } from 'shared/const/localStorage';

const initialState: IUserSchema = {}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setAuthData: (state, action: PayloadAction<IUser>) => {
      state.authData = action.payload;
    },
    initAuthData: (state, action: PayloadAction<IUser>) => {
      const user = localStorage.getItem(USER_LOCAL_STORAGE_KEY);
      if (user) {
        state.authData = JSON.parse(user);
      }
    },
    logout: (state, action: PayloadAction<IUser>) => {
      state.authData = undefined;
      localStorage.removeItem(USER_LOCAL_STORAGE_KEY);
    }
  }
})

export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;
