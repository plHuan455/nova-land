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

export type ProjectTypes = {
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
    name: string
  },
  description: string,
}

export type ProjectsParamsTypes = {
  keyword?: string,
  real_estates_slug?: string,
  highlight?: boolean,
  about_us?: boolean,
}

export type LeadershipCategoryDataTypes = {
  id: number,
  name: string,
  slug: string,
}

export type LeadershipDataTypes = {
  id: 2,
  name: string,
  gender: string,
  thumbnail: string,
  category: {
    name: string
  },
  position: string,
  achievement: string,
  quotation: string
}

export type LeadershipParamsTypes = {
  leadership_category_slug?: string,
  keyword?: string,
}

export type PrizesType = {
  id: number,
  name: string,
  thumbnail: string,
  yearId: {
    id: number,
    year: number,
  }
}

export type MapsDataTypes = {
  id: number,
  pointX: number,
  pointY: number,
  projects: number[],
  city: {
    id: number,
    name: string,
  }
}

export type MapsParamsTypes = {
  city_id?: number,
  project_id?: number,
}
