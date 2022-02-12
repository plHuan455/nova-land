import {
  NearestExchangesTypes,
  NearestExchangesParamsTypes,
  ExchangesTypes,
  ExchangesParamsTypes,
} from './types';

import axiosInstance from 'services/common/instance';

const getNearestExchangesService = async (
  params: NearestExchangesParamsTypes,
): Promise<NearestExchangesTypes> => {
  const response = await axiosInstance.get('nearest-exchanges', { params });
  return response.data.data;
};

export const getExchangesService = async (
  params?: ExchangesParamsTypes,
): Promise<APIPaginationResponse<ExchangesTypes[]>> => {
  const response = await axiosInstance.get('exchanges', { params });
  return response.data;
};

export default getNearestExchangesService;
