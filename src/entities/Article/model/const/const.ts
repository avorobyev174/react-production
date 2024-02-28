import type { IArticleCodeBlock, IArticleImageBlock, IArticleTextBlock } from '@/entities/Article/model';

export enum EArticleType {
  IT = 'IT',
  SCIENCE = 'SCIENCE',
  ECONOMICS = 'ECONOMICS',
  ALL = 'ALL',
}

export type TArticleBlock = IArticleImageBlock | IArticleTextBlock | IArticleCodeBlock;

export enum EArticleSortField {
  VIEWS = 'views',
  TITLE = 'title',
  CREATED = 'created',
}

export enum EArticleBlockType {
  CODE = 'CODE',
  TEXT = 'TEXT',
  IMAGE = 'IMAGE',
}

export enum EArticleView {
  BIG = 'BIG',
  SMALL = 'SMALL'
}
