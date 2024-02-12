import { createAsyncThunk } from '@reduxjs/toolkit';
import { type IThunkConfig } from 'app/providers/StoreProvider';
import { type IArticle } from 'entites/Article';

export const fetchArticlesList = createAsyncThunk<IArticle[], undefined, IThunkConfig<string>>(
  'articles/fetchArticlesList',
  async (_, thunkAPI) => {
    const { extra, rejectWithValue } = thunkAPI;
    try {
      const response = await extra.api.get<IArticle[]>('/articles', {
        params: {
          _expand: 'user'
        }
      });
      if (!response.data) {
        throw new Error();
      }
      return response.data
    } catch (e) {
      return rejectWithValue('error');
    }
  }
)
