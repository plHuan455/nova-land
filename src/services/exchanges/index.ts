import { NearestExchangesTypes, NearestExchangesParamsTypes } from './types';

import axiosInstance from 'services/common/instance';

const getNearestExchangesService = async (
  params : NearestExchangesParamsTypes,
): Promise<NearestExchangesTypes> => {
  const response = await axiosInstance.get('nearest-exchanges', { params });
  return response.data.data;
};

export default getNearestExchangesService;
