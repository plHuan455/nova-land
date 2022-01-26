import {
  LeadershipCategoryDataTypes,
  LeadershipDataTypes,
  LeadershipParamsTypes,
  PrizesType,
  ProjectsParamsTypes,
  ProjectTypes,
  RealEstatesTypes,
} from './type';

import axiosInstance from 'services/common/instance';

const getRealEstatesService = async (): Promise<RealEstatesTypes[]> => {
  const response = await axiosInstance.get('real-estates');
  return response.data.data;
};

export const getProjectsService = async (
  params: ProjectsParamsTypes,
): Promise<ProjectTypes[]> => {
  const response = await axiosInstance.get('projects', { params });
  return response.data.data;
};

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

export default getRealEstatesService;
