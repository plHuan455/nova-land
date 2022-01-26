/* eslint-disable camelcase */

export type KeywordParamsTypes = {
  keyword?: string;
}

export type RealEstatesDataTypes = {
  id: number;
  name: string;
  slug: string;
  description: string;
  thumbnail: string;
  icon: string;
  iconHover: string;
  smallDescription: string;
  items: {
    icon: string;
    description: string;
  }[];
}

export type CategoryProjectsDataTypes = {
  id: number;
  name: string;
  realEstates: {
    name: string;
    slug: string;
  }
}

export type ProjectsParamsTypes = {
  keyword?: string;
  real_estates_slug?: string;
  highlight?: boolean;
  about_us?: boolean;
}

export type ProjectsDataTypes = {
  id: number;
  thumbnail: string;
  projectLogo: string;
  link: string;
  name: string;
  realEstates: {
    name: string;
    slug: string;
  }
  category: {
    name: string;
  }
  description?: string;
}
