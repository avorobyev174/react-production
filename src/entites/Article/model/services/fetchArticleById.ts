import { createAsyncThunk } from '@reduxjs/toolkit';
import { type IThunkConfig } from 'app/providers/StoreProvider';
import { type IArticle } from '../../model/index';

export const fetchArticleById = createAsyncThunk<IArticle, string, IThunkConfig<string>>(
  'articleDetails/fetchArticleById',
  async (articleId, thunkAPI) => {
    const { extra, rejectWithValue } = thunkAPI;

    try {
      const response = await extra.api.get<IArticle>(`/articles/${ articleId }`);
      if (!response.data) {
        throw new Error();
      }
      return response.data
    } catch (e) {
      console.log(e)
      return rejectWithValue('error');
    }
  }
)
