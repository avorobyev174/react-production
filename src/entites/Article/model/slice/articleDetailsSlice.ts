import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { type IArticleDetailsSchema } from '../types/articleDetailsSchema';
import { fetchArticleById } from '../services/fetchArticleById';
import { type IArticle } from '../../model/index';

const initialState: IArticleDetailsSchema = {
  isLoading: false,
  error: ''
}

const articleDetailsSlice = createSlice({
  name: 'articleDetails',
  initialState,
  reducers: {
    /* setUserName: (state, action: PayloadAction<string>) => {
      state.username = action.payload;
    },
    setPassword: (state, action: PayloadAction<string>) => {
      state.password = action.payload;
    } */
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticleById.pending, (state, action) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(fetchArticleById.fulfilled, (state, action: PayloadAction<IArticle>) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(fetchArticleById.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
  }
})

export const { actions: articleDetailsActions } = articleDetailsSlice;
export const { reducer: articleDetailsReducer } = articleDetailsSlice;
