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
  children: {
    name: string,
    slug: string,
  }[]
  banner: {
    name: string;
    items: BannersDataTypes[];
  };
  breadcrumbs: BreadcrumbsData[];
  seoData: SEOData;
  openGraph: OpenGraphData;
}

export type NewsListParamsTypes = {
  keyword?: string,
  page?: number,
  limit?: number,
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
