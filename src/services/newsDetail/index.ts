import { NewsDetailData } from './type';

import axiosInstance from 'services/common/instance';

export const getNewsDetailService = async (
  slug: string,
): Promise<NewsDetailData> => {
  const response = await axiosInstance.get(`news/${slug}`);
  return response.data.data;
};

export const placeholder = null;
