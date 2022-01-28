import {
  LeadershipCategoryDataTypes,
  LeadershipDataTypes,
  LeadershipParamsTypes,
  PrizesType,
  PrizeYearsType,
  PrizesParamsType,
} from './type';

import axiosInstance from 'services/common/instance';
import { KeywordParamsTypes } from 'services/project/types';

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

export const getPrizesService = async (
  params?: PrizesParamsType,
): Promise<PrizesType[]> => {
  const response = await axiosInstance.get('prizes', { params });
  return response.data.data;
};

export const getPrizeYearsService = async (
  params?: KeywordParamsTypes,
): Promise<PrizeYearsType[]> => {
  const response = await axiosInstance.get('prize-years', { params });
  return response.data.data;
};
