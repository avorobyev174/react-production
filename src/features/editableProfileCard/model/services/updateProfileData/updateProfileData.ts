import { createAsyncThunk } from '@reduxjs/toolkit';
import { type IThunkConfig } from '@/app/providers/StoreProvider';
import { type IProfile } from '@/entities/Profile';
import { getProfileForm } from '../../selectors/getProfileForm/getProfileForm';
import { validateProfileData } from '../../services/validateProfile/validateProfileData';
import { EValidateProfileError } from '../../const/const';

export const updateProfileData = createAsyncThunk<
  IProfile,
  undefined,
  IThunkConfig<EValidateProfileError[]>
>('profile/updateProfileData', async (_, thunkAPI) => {
  const { extra, rejectWithValue, getState } = thunkAPI;
  const formData = getProfileForm(getState());
  const errors = validateProfileData(formData);

  if (errors.length) {
    return rejectWithValue(errors);
  }
  try {
    const response = await extra.api.put<IProfile>(
      `/profile/${formData?.id}`,
      formData,
    );
    if (!response.data) {
      throw new Error();
    }
    return response.data;
  } catch (e) {
    return rejectWithValue([EValidateProfileError.SERVER_ERROR]);
  }
});
