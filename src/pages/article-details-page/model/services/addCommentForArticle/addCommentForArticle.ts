import { createAsyncThunk } from '@reduxjs/toolkit';
import { getUserAuthData } from 'entites/User';
import { type IThunkConfig } from 'app/providers/StoreProvider';
import { type IComment, } from 'entites/Comment';
import { getArticleDetailsData } from 'entites/Article';
import {
  fetchCommentsByArticleId
} from 'pages/article-details-page/model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';

export const addCommentForArticle = createAsyncThunk<IComment, string, IThunkConfig<string>>(
  'articleDetails/addCommentForArticle',
  async (text, thunkAPI) => {
    const { dispatch, extra, rejectWithValue, getState } = thunkAPI;

    const userData = getUserAuthData(getState());
    const article = getArticleDetailsData(getState());

    if (!userData || !text || !article) {
      return rejectWithValue('no data');
    }

    try {
      const response = await extra.api.post<IComment>('/comments', {
        articleId: article.id,
        userId: userData.id,
        text
      });

      if (!response.data) {
        throw new Error();
      }

      dispatch(fetchCommentsByArticleId(article.id));

      return response.data
    } catch (e) {
      return rejectWithValue('error');
    }
  }
)
