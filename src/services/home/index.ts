import {
  NewsCategoryDataTypes, ProjectParamTypes, ProjectsTypes, RealEstatesTypes,
} from './type';

import axiosInstance from 'services/common/instance';

export const getProjectsService = async (params : ProjectParamTypes): Promise<ProjectsTypes[]> => {
  const response = await axiosInstance.get('projects', { params });
  return response.data.data;
};

const getRealEstatesService = async (): Promise<RealEstatesTypes[]> => {
  const response = await axiosInstance.get('real-estates');
  return response.data.data;
};

export const getNewsCategoryService = async (): Promise<NewsCategoryDataTypes[]> => {
  const response = await axiosInstance.get('news-category');
  return response.data.data;
};

// export const getNewsListService = async (
//   params: NewsListParamsTypes
// ): Promise<NewsCategoryDataTypes[]> => {
//   const response = await axiosInstance.get('news-category');
//   return response.data.data;
// };

export default getRealEstatesService;
