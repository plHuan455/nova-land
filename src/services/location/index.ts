import { CitiesDataTypes } from './types';

import axiosInstance from 'services/common/instance';

export const getCitiesService = async (): Promise<CitiesDataTypes[]> => {
  const response = await axiosInstance.get('locations/cities/vietnamese');
  return response.data.data;
};

export const placeholder = null;
