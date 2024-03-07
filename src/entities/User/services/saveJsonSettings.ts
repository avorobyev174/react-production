import { createAsyncThunk } from '@reduxjs/toolkit';
import { type IThunkConfig } from '@/app/providers/StoreProvider';
import { getUserAuthData } from '../model/selectors/getUserAuthData/getUserAuthData';
import { IJsonSettings } from '../model/types/jsonSettings';
import { getJsonSettings } from '../model/selectors/jsonSettings';
import { setJsonSettingsMutation } from '../api/userApi';

export const saveJsonSettings = createAsyncThunk<
  IJsonSettings,
  IJsonSettings,
  IThunkConfig<string>
>('user/saveJsonSettings', async (newJsonSettings, thunkAPI) => {
  const { extra, rejectWithValue, getState, dispatch } = thunkAPI;
  const userData = getUserAuthData(getState());
  const currentSettings = getJsonSettings(getState());

  if (!userData) {
    return rejectWithValue('error');
  }
  try {
    const response = await dispatch(
      setJsonSettingsMutation({
        userId: userData.id,
        jsonSettings: { ...currentSettings, ...newJsonSettings },
      }),
    ).unwrap();
    if (!response.jsonSettings) {
      return rejectWithValue('error');
    }
    return response.jsonSettings;
  } catch (e) {
    return rejectWithValue('error');
  }
});
