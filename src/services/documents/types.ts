/* eslint-disable camelcase */
export type DocumentParamsType = {
  keyword?: string;
  page?: number;
  limit?: number;
  category_id?: number;
  year?: string;
  is_highlight?: boolean;
}

export type DocumentsData = {
  id: number;
  name: string;
  locale: string;
  yearId: number;
  file: string;
  publishedAt: string;
  showHome: boolean;
  quarters: string[];
}

export type OtherDocumentParamsType = {
  keyword?: string;
  page?: number;
  limit?: number;
  is_highlight?: boolean;
}

export type OtherDocumentsDataTypes = {
  id: number,
  name: string,
  locale: string,
  file: string,
  publishedAt: string,
  showHome: boolean,
}

export type DocumentTypes = {
  id: number;
  name: string;
  locale: string;
}

export type DocumentsParamsType = {
  keyword?: string;
  page?: number;
  limit?: number;
}

export type OtherDocumentCategoriesTypes = {
  id: number;
  displayOrder: number;
  name: string;
  slug: string;
  parentId: number;
}

export type OtherDocumentCategoriesDetailParamsTypes = {
  keyword?: string;
  page?: number;
  limit?: number;
}

export type OtherDocumentCategoriesDetailTypes = {
  id: number;
  name: string;
  locale: string;
  file: string;
  publishedAt: string;
  showHome: boolean;
}

export type OtherDocumentCategoriesDataTypes = {
  subMenu?: OtherDocumentCategoriesDataTypes[];
} & OtherDocumentCategoriesTypes;
