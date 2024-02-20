import { createAsyncThunk } from '@reduxjs/toolkit';
import { type IThunkConfig } from 'app/providers/StoreProvider';
import { type IProfile } from 'entites/Profile';

export const fetchProfileData = createAsyncThunk<IProfile, string, IThunkConfig<string>>(
  'profile/fetchProfileData',
  async (profileId, thunkAPI) => {
    const { extra, rejectWithValue } = thunkAPI;
    try {
      const response = await extra.api.get<IProfile>(`/profile/${ profileId }`);
      if (!response.data) {
        throw new Error();
      }
      return response.data;
    } catch (e) {
      console.log(e)
      return rejectWithValue('error');
    }
  }
)
