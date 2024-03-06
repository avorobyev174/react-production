import { createSlice } from '@reduxjs/toolkit';
import { type IProfileSchema } from '../../model/types/editableProfileCardSchema';
import { fetchProfileData } from '../../model/services/fetchProfileData/fetchProfileData';
import { updateProfileData } from '../../model/services/updateProfileData/updateProfileData';

const initialState: IProfileSchema = {
  readonly: true,
  isLoading: false,
  error: undefined,
  data: undefined,
};

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    setReadonly: (state, action) => {
      state.readonly = action.payload;
    },
    cancelEdit: (state) => {
      state.readonly = true;
      state.validateErrors = undefined;
      state.form = state.data;
    },
    updateProfile: (state, action) => {
      state.form = {
        ...state.form,
        ...action.payload,
      };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProfileData.pending, (state) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(fetchProfileData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
        state.form = action.payload;
      })
      .addCase(fetchProfileData.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(updateProfileData.pending, (state) => {
        state.validateErrors = undefined;
        state.isLoading = true;
      })
      .addCase(updateProfileData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
        state.form = action.payload;
        state.readonly = true;
        state.validateErrors = undefined;
      })
      .addCase(updateProfileData.rejected, (state, action) => {
        state.isLoading = false;
        state.validateErrors = action.payload;
      });
  },
});

export const { actions: profileActions } = profileSlice;
export const { reducer: profileReducer } = profileSlice;
