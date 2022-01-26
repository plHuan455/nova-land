import {
  ProjectParamTypes,
  ProjectsTypes,
  RealEstatesTypes,
} from './types';

import axiosInstance from 'services/common/instance';

export const getProjectsService = async (params : ProjectParamTypes): Promise<ProjectsTypes[]> => {
  const response = await axiosInstance.get('projects', { params });
  return response.data.data;
};

export const getRealEstatesService = async (): Promise<RealEstatesTypes[]> => {
  const response = await axiosInstance.get('real-estates');
  return response.data.data;
};
