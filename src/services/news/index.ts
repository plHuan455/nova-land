import { NewsDataTypes, NewsParamsTypes } from './types';

import axiosInstance from 'services/common/instance';

export const getNewsDataService = async (
  params: NewsParamsTypes,
): Promise<APIPaginationResponse<NewsDataTypes[]>> => {
  const res = await axiosInstance.get('/news', { params });
  return res.data;
};

export const placeholder = null;
