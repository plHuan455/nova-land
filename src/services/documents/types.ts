/* eslint-disable camelcase */
export type DocumentParamsType = {
  keyword?: string;
  page?: number;
  limit?: number;
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
