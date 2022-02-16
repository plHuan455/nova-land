/* eslint-disable camelcase */
export type RealEstatesTypes = {
  id: number,
  name: string,
  description: string,
  thumbnail: string,
  icon: string,
  iconHover: string,
  isMapHome: boolean,
  smallDescription: string,
  items: [
    {
      icon: string,
      description: string,
    },
  ],
  link: {
    url: string,
    target: string,
  }
}

export type KeywordParamsTypes = {
  keyword?: string;
}

export type RealEstatesParamsTypes = {
  is_map_home?: boolean;
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
  onGoing: boolean,
  darkBackgroundLogo?: string,
}

export type ProjectParamTypes = {
  keyword?: string,
  real_estates_id?: number,
  category_project_id?: number,
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
