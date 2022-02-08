import {
  NewsCategoryDataTypes,
  NewsListParamsTypes,
  NewsDataTypes,
  NewsListParamsTypesDummy,
} from './type';

import axiosInstance from 'services/common/instance';

export const getNewsCategoryService = async (): Promise<NewsCategoryDataTypes[]> => {
  const response = await axiosInstance.get('news-category');
  return response.data.data;
};

export const getNewsService = async (
  params?: NewsListParamsTypes,
): Promise<NewsDataTypes[]> => {
  const response = await axiosInstance.get('news', { params });
  return response.data.data;
};

export const getNewsServiceDummy = async (
  params: NewsListParamsTypesDummy,
): Promise<NewsDataTypes[]> => {
  const response = await axiosInstance.get('news', { params });
  return response.data.data;
};

export default getNewsCategoryService;
