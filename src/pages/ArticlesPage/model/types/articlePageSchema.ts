import { type EntityState } from '@reduxjs/toolkit';
import type { EArticleType, EArticleView, EArticleSortField, IArticle } from '@/entities/Article';
import { type TSortOrder } from '@/shared/types';

export interface IArticlesPageSchema extends EntityState<IArticle> {
  isLoading?: boolean;
  error?: string;
  view: EArticleView;
  // pagination
  page: number;
  limit: number;
  hasMore: boolean;
  // order
  order?: TSortOrder;
  sort?: EArticleSortField;
  search?: string;
  _inited: boolean;
  type: EArticleType
}
