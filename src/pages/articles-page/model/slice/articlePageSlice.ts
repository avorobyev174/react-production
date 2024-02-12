import { createEntityAdapter, createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { type IStateSchema } from 'app/providers/StoreProvider';
import { type IArticle } from 'entites/Article';
import { type IArticlesPageSchema } from 'pages/articles-page';
import { EArticleView } from 'entites/Article/model';
import { fetchArticlesList } from 'pages/articles-page/model/services/fetchArticlesList/fetchArticlesList';
import { ARTICLE_VIEW_STORAGE_KEY } from 'shared/const/localStorage';

const articlesAdapter = createEntityAdapter<IArticle>({
  selectId: (article) => article.id
})

export const getArticles = articlesAdapter.getSelectors<IStateSchema>(
  (state) => state.articlesPage || articlesAdapter.getInitialState()
)

const articlesPageSlice = createSlice({
  name: 'articlesPageSlice',
  initialState: articlesAdapter.getInitialState<IArticlesPageSchema>({
    isLoading: false,
    error: undefined,
    ids: [],
    entities: {},
    view: EArticleView.SMALL
  }),
  reducers: {
    setView: (state, action: PayloadAction<EArticleView>) => {
      state.view = action.payload;
      localStorage.setItem(ARTICLE_VIEW_STORAGE_KEY, action.payload);
    },
    initState: state => {
      state.view = localStorage.getItem(ARTICLE_VIEW_STORAGE_KEY) as EArticleView;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticlesList.pending, (state) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(fetchArticlesList.fulfilled, (state, action: PayloadAction<IArticle[]>) => {
        state.isLoading = false;
        articlesAdapter.setAll(state, action.payload);
      })
      .addCase(fetchArticlesList.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
  }
});

export const { reducer: articlePageReducer } = articlesPageSlice;
export const { actions: articlePageActions } = articlesPageSlice;
