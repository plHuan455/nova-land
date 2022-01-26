import {
  RealEstatesDataTypes,
  CategoryProjectsDataTypes,
  ProjectsParamsTypes,
  ProjectsDataTypes,
  KeywordParamsTypes,
} from './types';

import axiosInstance from 'services/common/instance';

const getRealEstatesService = async (params?: KeywordParamsTypes):
Promise<RealEstatesDataTypes[]> => {
  const response = await axiosInstance.get('real-estates', { params });
  return response.data.data;
};

export const getCategoryProjectsService = async (params?: KeywordParamsTypes):
Promise<CategoryProjectsDataTypes[]> => {
  const response = await axiosInstance.get('category-projects', { params });
  return response.data.data;
};

export const getProjectsService = async (params?: ProjectsParamsTypes):
Promise<ProjectsDataTypes[]> => {
  const response = await axiosInstance.get('projects', { params });
  return response.data.data;
};

export default getRealEstatesService;
