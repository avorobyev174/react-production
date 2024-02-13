import { createAsyncThunk } from '@reduxjs/toolkit';
import { type IThunkConfig } from 'app/providers/StoreProvider';
import { getArticlesPageInited } from 'pages/articles-page/model/selectors/articles';
import { articlePageActions } from 'pages/articles-page/model/slice/articlePageSlice';
import { fetchArticlesList } from 'pages/articles-page/model/services/fetchArticlesList/fetchArticlesList';

export const initArticlesPage = createAsyncThunk<void, void, IThunkConfig<string>>(
  'articles/initArticlesPage',
  async (_: unknown, thunkAPI) => {
    const { getState, dispatch } = thunkAPI;
    const inited = getArticlesPageInited(getState());

    if (!inited) {
      dispatch(articlePageActions.initState());
      dispatch(fetchArticlesList({
        page: 1
      }));
    }
  }
)
