import { createAsyncThunk } from '@reduxjs/toolkit';
import { type IThunkConfig } from 'app/providers/StoreProvider';
import { type IProfile } from '../../types/profile';

export const fetchProfileData = createAsyncThunk<IProfile, unknown, IThunkConfig<string>>(
  'profile/fetchProfileData',
  async (_, thunkAPI) => {
    const { extra, rejectWithValue } = thunkAPI;
    try {
      const response = await extra.api.get<IProfile>('/profile');
      return response.data
    } catch (e) {
      console.log(e)
      return rejectWithValue('error');
    }
  }
)
