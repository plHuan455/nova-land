import { MenuDataTypes } from './types';

import axiosInstance from 'services/common/instance';

const getMenusService = async (): Promise<MenuDataTypes[]> => {
  const response = await axiosInstance.get('menus');
  return response.data.data;
};

export default getMenusService;
