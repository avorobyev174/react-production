import { createAsyncThunk } from '@reduxjs/toolkit';
import { type IThunkConfig } from 'app/providers/StoreProvider';
import {
  getArticlesIsLoading,
  getArticlesPage,
  getArticlesPageHasMore,
} from 'pages/articles-page/model/selectors/articles';
import { articlePageActions } from 'pages/articles-page/model/slice/articlePageSlice';
import { fetchArticlesList } from 'pages/articles-page/model/services/fetchArticlesList/fetchArticlesList';

export const fetchNextArticlesPage = createAsyncThunk<void, void, IThunkConfig<string>>(
  'articles/fetchNextArticlesPage',
  async (_: void, thunkAPI) => {
    const { getState, dispatch } = thunkAPI;
    const hasMore = getArticlesPageHasMore(getState());
    const page = getArticlesPage(getState());
    const isLoading = getArticlesIsLoading(getState());

    if (hasMore && !isLoading) {
      dispatch(articlePageActions.setPage(page + 1));
      dispatch(fetchArticlesList({
        page: page + 1
      }));
    }
  }
)
