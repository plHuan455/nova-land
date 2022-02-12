/* eslint-disable camelcase */
export type EventDetailData = {
  id: number;
  thumbnail: string;
  image: string;
  title: string;
  slug: string;
  address: string;
  description: string;
  shortDescription: string;
  addressName: string;
  view: number;
  link: {
    text: string,
    url: string,
    target: string,
  },
  eventFrom: string;
  eventTo: string;
  isPopular: boolean;
  authorName: string;
  tags: [
    {
      name: string
      slug: string,
    }
  ],
  breadcrumbs: BreadcrumbsData[];
  openGraph: OpenGraphData;
  seoData: SEOData;
};

export type ParamNewsEventType = {
  keyword?: string,
  page?: number,
  limit?: number,
  is_popular?: string,
  except_ids?: string,
}
