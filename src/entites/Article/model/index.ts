export enum EArticleBlockType {
  CODE = 'CODE',
  TEXT = 'TEXT',
  IMAGE = 'IMAGE',
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
}

export interface IArticle {
  id: string;
  title: string;
  subtitle: string;
  img: string;
  views: number;
  createdAt: string;
  type: EArticleType[];
  blocks: TArticleBlock[]
}
