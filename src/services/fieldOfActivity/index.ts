import { RealEstatesDataTypes } from './types';

import axiosInstance from 'services/common/instance';

const getRealEstatesService = async ():
Promise<RealEstatesDataTypes[]> => {
  const response = await axiosInstance.get('real-estates');
  return response.data.data;
};

export default getRealEstatesService;
