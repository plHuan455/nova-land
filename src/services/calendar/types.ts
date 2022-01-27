export type CalendarData = {
  id: number;
  displayOrder: number;
  thumbnail: string;
  image: string;
  eventFrom: string;
  eventTo: string;
  view: number;
  title: string;
  slug: string;
  description: string;
  address: string;
  locale: string;
  link: {
    text: string;
    url: string;
    target: string;
  },
  tags: string[];
  isPopular: boolean;
}

export type CalendarParamsType = {
  keyword?: string;
  page?: number;
  is_popular?: boolean;
  limit?: number;
}