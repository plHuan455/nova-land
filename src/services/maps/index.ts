import {
  DataMapsTypes,
  MapsParamsTypes,
} from './types';

import axiosInstance from 'services/common/instance';

const getMapService = async (params: MapsParamsTypes): Promise<DataMapsTypes[]> => {
  const response = await axiosInstance.get('maps', { params });
  return response.data.data;
};

export default getMapService;
