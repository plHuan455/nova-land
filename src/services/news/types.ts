/* eslint-disable camelcase */
type CategoryDataTypes = {
  id: number;
  parent?: []
  name: string;
  slug: string;
}

export interface NewsDataTypes {
  id: number;
  displayOrder: number;
  thumbnail: string;
  publishedAt: string;
  viewed: number;
  category: CategoryDataTypes[];
  title: string;
  slug: string;
  description: string;
  content: string;
  tags: [];
  locale: string;
  isPopular: boolean;
}

export type NewsParamsTypes = {
  locale?: string;
  keyword?: string;
  page?: number;
  limit?: number;
  category_slug?: string;
  is_popular?: boolean;
}
