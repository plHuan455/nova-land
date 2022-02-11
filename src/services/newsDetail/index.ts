import {
  NewsDetailData, NewsTagType, ParamNewsTagType, ParamRelatedNewsType,
} from './type';

import axiosInstance from 'services/common/instance';

export const getNewsDetailService = async (
  slug: string,
): Promise<NewsDetailData> => {
  const response = await axiosInstance.get(`news/${slug}`);
  return response.data.data;
};

export const getRelatedNewsService = async (
  params: ParamRelatedNewsType,
): Promise<NewsDetailData[]> => {
  const response = await axiosInstance.get('news', { params });
  return response.data.data;
};

export const getNewsTagService = async (
  params: ParamNewsTagType,
): Promise<NewsTagType[]> => {
  const response = await axiosInstance.get('news-tags', { params });
  return response.data.data;
};

export const placeholder = null;
