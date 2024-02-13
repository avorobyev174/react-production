import { type EntityState } from '@reduxjs/toolkit';
import { type IArticle } from 'entites/Article';
import { type EArticleView } from 'entites/Article/model';

export interface IArticlesPageSchema extends EntityState<IArticle> {
  isLoading?: boolean;
  error?: string;
  view: EArticleView;
  page: number;
  limit?: number;
  hasMore: boolean;
  _inited: boolean;
}
