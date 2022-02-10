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

export type KeywordParamsTypes = {
  keyword?: string;
}

export type RealEstatesParamsTypes = {
  is_map_home?: boolean;
  locale: string;
  keyword?: string;
}

export type ProjectsTypes = {
  id: number,
  thumbnail: string,
  projectLogo: string,
  link: {
    url: string;
    target: string;
  } | null,
  name: string,
  realEstates: {
    name: string,
    slug: string,
  },
  category: {
    name: string,
  },
  description: string,
  darkBackgroundLogo?: string,
}

export type ProjectParamTypes = {
  keyword?: string,
  real_estates_slug?: string,
  highlight?: boolean;
  about_us?: boolean;
  city_id?: number;
  on_going?: boolean;
}

export type CategoryProjectsDataTypes = {
  id: number;
  name: string;
  realEstates: {
    name: string;
    slug: string;
  }
}
