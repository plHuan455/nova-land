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
