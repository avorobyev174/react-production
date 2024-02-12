import { createAsyncThunk } from '@reduxjs/toolkit';
import { type IThunkConfig } from 'app/providers/StoreProvider';
import { type IArticle } from 'entites/Article';
import { getArticlesPageLimit } from 'pages/articles-page/model/selectors/articles';

interface fetchArticlesListProps {
  page: number;
}

export const fetchArticlesList = createAsyncThunk<IArticle[], fetchArticlesListProps, IThunkConfig<string>>(
  'articles/fetchArticlesList',
  async (props, thunkAPI) => {
    const { extra, rejectWithValue, getState } = thunkAPI;
    const { page = 1 } = props;
    const limit = getArticlesPageLimit(getState());
    try {
      const response = await extra.api.get<IArticle[]>('/articles', {
        params: {
          _expand: 'user',
          _limit: limit,
          _page: page,
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
