import { createAsyncThunk } from '@reduxjs/toolkit';
import { type IThunkConfig } from '@/app/providers/StoreProvider';
import { type IArticle } from '@/entities/Article';

export const fetchArticleRecommendations = createAsyncThunk<IArticle[], void, IThunkConfig<string>>(
  'articleDetailsPage/fetchArticleRecommendations',
  async (_, thunkAPI) => {
    const { extra, rejectWithValue } = thunkAPI;

    try {
      const response = await extra.api.get<IArticle[]>('/articles', {
        params: {
          _limit: 4,
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
