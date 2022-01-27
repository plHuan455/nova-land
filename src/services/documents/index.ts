import { DocumentsData, DocumentParamsType } from './types';

import axiosInstance from 'services/common/instance';

const getDocumentsService = async (
  params?: DocumentParamsType,
): Promise<APIPaginationResponse<DocumentsData[]>> => {
  const response = await axiosInstance.get('documents', { params });
  return response.data;
};

export default getDocumentsService;
