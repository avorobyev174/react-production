import { type IUser } from 'entites/User';

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

export interface IArticleBlockBase {
  id: string;
  type: EArticleBlockType;
}

export interface IArticleCodeBlock extends IArticleBlockBase {
  type: EArticleBlockType.CODE;
  code: string;
}

export interface IArticleImageBlock extends IArticleBlockBase {
  type: EArticleBlockType.IMAGE;
  src: string;
  title: string;
}

export interface IArticleTextBlock extends IArticleBlockBase {
  type: EArticleBlockType.TEXT;
  title?: string;
  paragraphs: string[];
}
export type TArticleBlock = IArticleImageBlock | IArticleTextBlock | IArticleCodeBlock;

export enum EArticleType {
  IT = 'IT',
  SCIENCE = 'SCIENCE',
  ECONOMICS = 'ECONOMICS',
  ALL = 'ALL',
}

export interface IArticle {
  id: string;
  title: string;
  user: IUser;
  subtitle: string;
  img: string;
  views: number;
  createdAt: string;
  type: EArticleType[];
  blocks: TArticleBlock[]
}
