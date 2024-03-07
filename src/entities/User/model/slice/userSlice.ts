import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { type IUser, type IUserSchema } from '../types/user';
import { USER_LOCAL_STORAGE_KEY } from '@/shared/const/localStorage';
import { setFeatureFlag } from '@/shared/lib/features';
import { saveJsonSettings } from '../../services/saveJsonSettings';
import { IJsonSettings } from '../types/jsonSettings';
import { initAuthData } from '../../services/initAuthData';

const initialState: IUserSchema = {
  _inited: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setAuthData: (state, action: PayloadAction<IUser>) => {
      state.authData = action.payload;
      setFeatureFlag(action.payload.features);

      localStorage.setItem(
        USER_LOCAL_STORAGE_KEY,
        JSON.stringify(action.payload.id),
      );
    },
    logout: (state) => {
      state.authData = undefined;
      localStorage.removeItem(USER_LOCAL_STORAGE_KEY);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      saveJsonSettings.fulfilled,
      (state, action: PayloadAction<IJsonSettings>) => {
        if (state.authData) {
          state.authData.jsonSettings = action.payload;
        }
      },
    );
    builder.addCase(
      initAuthData.fulfilled,
      (state, action: PayloadAction<IUser>) => {
        state.authData = action.payload;
        setFeatureFlag(action.payload.features);
        state._inited = true;
      },
    );
    builder.addCase(initAuthData.rejected, (state) => {
      state._inited = true;
    });
  },
});

export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;
