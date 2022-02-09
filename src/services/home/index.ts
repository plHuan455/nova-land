import {
  NewsCategoryDataTypes,
  NewsListParamsTypes,
  NewsDataTypes,
} from './type';

import axiosInstance from 'services/common/instance';

export const getNewsCategoryService = async (): Promise<NewsCategoryDataTypes[]> => {
  const response = await axiosInstance.get('news-category');
  return response.data.data;
};

export const getNewsService = async (
  params?: NewsListParamsTypes,
): Promise<APIPaginationResponse<NewsDataTypes[]>> => {
  const response = await axiosInstance.get('news', { params });
  return response.data;
};

export default getNewsCategoryService;
