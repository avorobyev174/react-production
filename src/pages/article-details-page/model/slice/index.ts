import { combineReducers } from '@reduxjs/toolkit';
import { type IArticleDetailsPageSchema } from '../types';
import {
  articleDetailsPageRecommendationsReducer
} from '../../model/slice/articleDetailsPageRecommendationsSlice';
import { articleDetailsCommentsReducer } from '../../model/slice/articleDetailsPageCommentsSlice';

export const articleDetailsPageReducer = combineReducers<IArticleDetailsPageSchema>({
  recommendations: articleDetailsPageRecommendationsReducer,
  comments: articleDetailsCommentsReducer
});
