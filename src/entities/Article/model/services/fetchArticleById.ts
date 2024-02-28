import { createAsyncThunk } from '@reduxjs/toolkit';
import { type IThunkConfig } from '@/app/providers/StoreProvider';
import { type IArticle } from '../../model/index';

export const fetchArticleById = createAsyncThunk<IArticle, string | undefined, IThunkConfig<string>>(
  'articleDetails/fetchArticleById',
  async (articleId, thunkAPI) => {
    const { extra, rejectWithValue } = thunkAPI;

    try {
      if (!articleId) {
        throw new Error('Article id is empty')
      }
      const response = await extra.api.get<IArticle>(`/articles/${ articleId }`,
        {
          params: {
            _expand: 'user'
          }
        });
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
