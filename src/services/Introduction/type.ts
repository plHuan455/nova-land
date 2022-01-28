/* eslint-disable camelcase */

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

export type PrizesParamsType = {
  keyword?: string;
  year_id?: number;
}

export type PrizesType = {
  id: number,
  name: string,
  thumbnail: string,
  yearId: {
    id: number,
    year: string,
  }
}

export type PrizeYearsType = {
  id: number,
  year: string,
  link: string,
}
