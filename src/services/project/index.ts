import {
  ProjectParamTypes,
  ProjectsTypes,
  RealEstatesTypes,
  KeywordParamsTypes,
  CategoryProjectsDataTypes,
} from './types';

import axiosInstance from 'services/common/instance';

export const getProjectsService = async (params : ProjectParamTypes): Promise<ProjectsTypes[]> => {
  const response = await axiosInstance.get('projects', { params });
  return response.data.data;
};

export const getRealEstatesService = async (
  params?: KeywordParamsTypes,
): Promise<RealEstatesTypes[]> => {
  const response = await axiosInstance.get('real-estates', { params });
  return response.data.data;
};

export const getCategoryProjectsService = async (params?: KeywordParamsTypes):
  Promise<CategoryProjectsDataTypes[]> => {
  const response = await axiosInstance.get('category-projects', { params });
  return response.data.data;
};
