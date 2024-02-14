import { createAsyncThunk } from '@reduxjs/toolkit';
import { type IThunkConfig } from 'app/providers/StoreProvider';
import { EArticleType, type IArticle } from 'entites/Article';
import {
  getArticlesPage,
  getArticlesPageLimit,
  getArticlesPageOrder,
  getArticlesPageSearch,
  getArticlesPageSort,
  getArticlesPageType
} from 'pages/articles-page/model/selectors/articles';
import { addQueryParams } from 'shared/lib/url/addQueryParams/addQueryParams';

interface fetchArticlesListProps {
  replace: boolean;
}

export const fetchArticlesList = createAsyncThunk<IArticle[], fetchArticlesListProps, IThunkConfig<string>>(
  'articles/fetchArticlesList',
  async (_, thunkAPI) => {
    const { extra, rejectWithValue, getState } = thunkAPI;
    const page = getArticlesPage(getState());
    const limit = getArticlesPageLimit(getState());
    const order = getArticlesPageOrder(getState());
    const sort = getArticlesPageSort(getState());
    const search = getArticlesPageSearch(getState());
    const type = getArticlesPageType(getState());

    try {
      addQueryParams({
        sort, order, search, type
      });
      const response = await extra.api.get<IArticle[]>('/articles', {
        params: {
          _expand: 'user',
          _limit: limit,
          _page: page,
          _sort: sort,
          _order: order,
          q: search,
          type: type === EArticleType.ALL ? undefined : type
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
