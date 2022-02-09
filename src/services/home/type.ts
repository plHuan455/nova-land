/* eslint-disable camelcase */
export type NewsCategoryDataTypes = {
  id: number,
  parent?: {
    id: number,
    name: string,
    slug: string,
  },
  name: string,
  slug: string,
}

export type NewsListParamsTypes = {
  keyword?: string,
  page?: string,
  limit?: string,
  category_slug?: string,
  is_popular?: boolean,
  is_new?: boolean,
}

export type NewsDataTypes = {
  id: number;
  displayOrder: number;
  thumbnail: string;
  publishedAt: string;
  viewed: 1000,
  category: {
      id: number;
      name: string;
      slug: string;
    }[];
  title: string;
  slug: string;
  description: string;
  content: string;
  tags: string[],
  locale: string;
  isPopular: boolean;
  isNew: boolean;
}
