/* eslint-disable camelcase */
export interface ReportDataTypes {
  id: number;
  name: string;
  locale: string;
  file: string;
  publishedAt: string;
  show: boolean;
}

export type ReportParamsTypes = {
  locale?: string;
  keyword?: string;
  page?: number;
  limit?: number;
  is_show?: boolean;
}
