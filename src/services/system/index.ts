import { SystemData } from './types';

import axiosInstance from 'services/common/instance';

export const getSystemService = async (): Promise<
  APIResponse<SystemData>
> => {
  const response = await axiosInstance.get('systems/general');
  return response.data;
};

export const placeholder = null;
