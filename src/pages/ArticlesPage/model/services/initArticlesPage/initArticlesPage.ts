import { createAsyncThunk } from '@reduxjs/toolkit';
import { type IThunkConfig } from '@/app/providers/StoreProvider';
import { getArticlesPageInited } from '../../../model/selectors/articles';
import { articlePageActions } from '../../../model/slice/articlePageSlice';
import { fetchArticlesList } from '../../../model/services/fetchArticlesList/fetchArticlesList';
import { type TSortOrder } from '@/shared/types';
import { type EArticleSortField } from '@/entities/Article';

export const initArticlesPage = createAsyncThunk<void, URLSearchParams, IThunkConfig<string>>(
  'articles/initArticlesPage',
  async (searchParams, thunkAPI) => {
    const { getState, dispatch } = thunkAPI;
    const inited = getArticlesPageInited(getState());

    if (!inited) {
      const orderFromUrl = searchParams.get('order');
      const sortFromUrl = searchParams.get('sort');
      const searchFromUrl = searchParams.get('search');
      if (orderFromUrl) {
        dispatch(articlePageActions.setOrder(orderFromUrl as TSortOrder));
      }
      if (sortFromUrl) {
        dispatch(articlePageActions.setSort(sortFromUrl as EArticleSortField));
      }
      if (searchFromUrl) {
        dispatch(articlePageActions.setSearch(searchFromUrl));
      }

      dispatch(articlePageActions.initState());
      dispatch(fetchArticlesList({ replace: false }));
    }
  },
)
