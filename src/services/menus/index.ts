import { MenusTypes } from './types';

import axiosInstance from 'services/common/instance';

const getMenusService = async (): Promise<MenusTypes[]> => {
  const res = await axiosInstance.get('menus');
  return res.data.data;
};

export default getMenusService;
