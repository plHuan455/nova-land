/* eslint-disable camelcase */
export type EventDetailData = {
  id: number,
  thumbnail: string,
  image: string,
  title: string,
  slug: string,
  description: string,
  shortDescription: string,
  addressName: string,
  view: number,
  authorName:string,
  link: {
    text: string,
    url: string,
    target: string,
  },
  eventFrom: string,
  eventTo: string,
  isPopular: boolean,
  tags: [
    {
      name: string
      slug: string,
    }
  ]
};

export type ParamNewsEventType = {
  keyword?: string,
  page?: number,
  limit?: number,
  is_popular?: string,
  except_ids?: string,
}
