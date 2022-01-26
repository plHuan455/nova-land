/* eslint-disable camelcase */
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
