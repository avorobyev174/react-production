import { type EntityState } from '@reduxjs/toolkit';
import { type IArticle } from 'entites/Article';
import { type EArticleType, type EArticleView } from 'entites/Article/model';
import { type TSortOrder } from 'shared/types';
import { type EArticleSortField } from 'entites/Article/model/types/article';

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
