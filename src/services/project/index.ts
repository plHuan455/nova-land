import {
  ProjectParamTypes,
  ProjectsTypes,
  RealEstatesTypes,
  CategoryProjectsParamsTypes,
  CategoryProjectsDataTypes,
  RealEstatesParamsTypes,
} from './types';

import axiosInstance from 'services/common/instance';

export const getProjectsService = async (params?: ProjectParamTypes): Promise<ProjectsTypes[]> => {
  const response = await axiosInstance.get('projects', { params });
  return response.data.data;
};

export const getRealEstatesService = async (
  params?: RealEstatesParamsTypes,
): Promise<RealEstatesTypes[]> => {
  const response = await axiosInstance.get('real-estates', { params });
  return response.data.data;
};

export const getCategoryProjectsService = async (params?: CategoryProjectsParamsTypes):
  Promise<CategoryProjectsDataTypes[]> => {
  const response = await axiosInstance.get('category-projects', { params });
  return response.data.data;
};
