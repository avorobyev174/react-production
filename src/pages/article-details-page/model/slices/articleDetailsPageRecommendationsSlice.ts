import { createEntityAdapter, createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { type IStateSchema } from 'app/providers/StoreProvider';
import { type IArticleDetailsRecommendationsSchema } from 'pages/article-details-page/model/types/ArticleDetailsRecommendationsSchema';
import { type IArticle } from 'entites/Article';
import {
  fetchArticleRecommendations
} from 'pages/article-details-page/model/services/fetchArticleRecommendations/fetchArticleRecommendations';

const recommendationsAdapter = createEntityAdapter<IArticle>({
  selectId: (comment) => comment.id
})

export const getArticleRecommendations = recommendationsAdapter.getSelectors<IStateSchema>(
  (state) => state.articleDetailsPage?.recommendations || recommendationsAdapter.getInitialState()
)

const articleDetailsPageRecommendationsSlice = createSlice({
  name: 'articleDetailsPageRecommendationsSlice',
  initialState: recommendationsAdapter.getInitialState<IArticleDetailsRecommendationsSchema>({
    isLoading: false,
    error: undefined,
    ids: [],
    entities: {}
  }),
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticleRecommendations.pending, (state) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(fetchArticleRecommendations.fulfilled, (state, action: PayloadAction<IArticle[]>) => {
        state.isLoading = false;
        recommendationsAdapter.setAll(state, action.payload);
      })
      .addCase(fetchArticleRecommendations.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
  }
});

export const { reducer: articleDetailsPageRecommendationsReducer } = articleDetailsPageRecommendationsSlice;
