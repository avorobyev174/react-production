import { combineReducers } from '@reduxjs/toolkit';
import { type IArticleDetailsPageSchema } from 'pages/article-details-page';
import {
  articleDetailsPageRecommendationsReducer
} from 'pages/article-details-page/model/slices/articleDetailsPageRecommendationsSlice';
import { articleDetailsCommentsReducer } from 'pages/article-details-page/model/slices/articleDetailsPageCommentsSlice';

export const articleDetailsPageReducer = combineReducers<IArticleDetailsPageSchema>({
  recommendations: articleDetailsPageRecommendationsReducer,
  comments: articleDetailsCommentsReducer
});
