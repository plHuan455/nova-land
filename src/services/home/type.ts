/* eslint-disable camelcase */
export type RealEstatesTypes = {
  id: number,
  name: string,
  slug: string,
  description: string,
  thumbnail: string,
  icon: string,
  iconHover: string,
  smallDescription: string,
  items: [
    {
      icon: string,
      description: string,
    },
  ]
}

export type ProjectsTypes = {
  id: number,
  thumbnail: string,
  projectLogo: string,
  link: string,
  name: string,
  realEstates: {
    name: string,
    slug: string,
  },
  category: {
    name: string,
  },
  description: string,
}

export type ProjectParamTypes = {
  keyword?: string,
  real_estates_slug?: string,
  highlight?: boolean;
  about_us?: boolean;
}

export type NewsCategoryDataTypes = {
  id: number,
  displayOrder: number,
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
