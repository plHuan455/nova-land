import {
  NewsCategoryDataTypes,
} from './type';

import axiosInstance from 'services/common/instance';

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

export default getNewsCategoryService;
