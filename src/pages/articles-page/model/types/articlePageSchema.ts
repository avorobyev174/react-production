import { type EntityState } from '@reduxjs/toolkit';
import { type IArticle } from '@/entities/Article';
import { type EArticleType, type EArticleView } from '@/entities/Article/model';
import { type TSortOrder } from '@/shared/types';

import { type EArticleSortField } from '@/entities/Article/model/const/const';

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
