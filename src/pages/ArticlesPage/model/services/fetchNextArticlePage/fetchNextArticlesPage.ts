import { createAsyncThunk } from '@reduxjs/toolkit';
import { type IThunkConfig } from '@/app/providers/StoreProvider';
import {
  getArticlesIsLoading,
  getArticlesPage,
  getArticlesPageHasMore,
} from '../../../model/selectors/articles';
import { articlePageActions } from '../../../model/slice/articlePageSlice';
import { fetchArticlesList } from '../../../model/services/fetchArticlesList/fetchArticlesList';

export const fetchNextArticlesPage = createAsyncThunk<void, void, IThunkConfig<string>>(
  'articles/fetchNextArticlesPage',
  async (_: void, thunkAPI) => {
    const { getState, dispatch } = thunkAPI;
    const hasMore = getArticlesPageHasMore(getState());
    const page = getArticlesPage(getState());
    const isLoading = getArticlesIsLoading(getState());

    if (hasMore && !isLoading) {
      dispatch(articlePageActions.setPage(page + 1));
      dispatch(fetchArticlesList({ replace: false }));
    }
  },
)
