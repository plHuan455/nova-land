import {
  LeadershipCategoryDataTypes,
  LeadershipDataTypes,
  LeadershipParamsTypes,
  PrizesType,
} from './type';

import axiosInstance from 'services/common/instance';

export const getLeadershipCategoryService = async (): Promise<LeadershipCategoryDataTypes[]> => {
  const response = await axiosInstance.get('leadership-category');
  return response.data.data;
};

export const getLeadershipService = async (
  params: LeadershipParamsTypes,
): Promise<LeadershipDataTypes[]> => {
  const response = await axiosInstance.get('leadership', { params });
  return response.data.data;
};

export const getPrizesService = async (): Promise<PrizesType[]> => {
  const response = await axiosInstance.get('prizes');
  return response.data.data;
};
