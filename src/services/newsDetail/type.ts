/* eslint-disable camelcase */
export type NewsDetailData = {
  id: number,
  thumbnail: string,
  image: string,
  banner: string,
  title: string,
  slug: string,
  description: string,
  content: string,
  viewed: number,
  authorName: string,
  seoData: {
    title: string,
    description: string,
    keywords: string
  },
  openGraph: {
    ogTitle: string,
    ogImage: string,
    ogDescription: string,
  },
  category: [
    {
      name: string,
      slug: string,
    }
  ],
  tags: [
    {
      name: string,
      slug: string,
    },
  ],
  publishedAt: string,
  breadcrumbs: [
    {
      type: string,
      text: string,
      slug: string,
    },
  ]
};

export type ParamRelatedNewsType = {
  keyword?: string,
  page?: number,
  limit?: number,
  category_slug?: string,
  is_popular?: string,
  except_ids?: string,
}

export type ParamNewsTagType = {
  is_popular?: boolean,
  keyword?: string,
  page?: number,
  limit?: number,
}

export type NewsTagType = {
  id: number,
  name: string,
  slug: string,
  isPopular: boolean,
}
