export type DocumentParamsType = {
  keyword?: string;
  page?: number;
  limit?: number;
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
