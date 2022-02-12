/* eslint-disable camelcase */
type NewsCategoryParentTypes = {
  id: number,
  name: string,
  slug: string,
}

export type NewsCategoryChildrenTypes = {
  name: string,
  slug: string,
}

export type NewsCategoryDataTypes = {
  id: number,
  name: string,
  slug: string,
  banner: {
    name: string;
    items: BannersDataTypes[];
  };
  breadcrumbs: BreadcrumbsData[];
  seoData: SEOData;
  openGraph: OpenGraphData;
  parent?: NewsCategoryParentTypes[],
  children: NewsCategoryChildrenTypes[],
}

export type NewsListParamsTypes = {
  keyword?: string,
  page?: number,
  limit?: number,
  category_slug?: string,
  is_popular?: boolean,
  is_new?: boolean,
  except_ids?: string,
}

export type NewsDataTypes = {
  id: number;
  displayOrder: number;
  thumbnail: string;
  publishedAt: string;
  viewed: number,
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
