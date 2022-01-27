import {
  DocumentsData,
  DocumentParamsType,
  OtherDocumentParamsType,
  OtherDocumentsDataTypes,
} from './types';

import axiosInstance from 'services/common/instance';

const getDocumentsService = async (
  params?: DocumentParamsType,
): Promise<APIPaginationResponse<DocumentsData[]>> => {
  const response = await axiosInstance.get('documents', { params });
  return response.data;
};

export const getOtherDocumentsService = async (
  params?: OtherDocumentParamsType,
): Promise<APIPaginationResponse<OtherDocumentsDataTypes[]>> => {
  const response = await axiosInstance.get('other-documents', { params });
  return response.data;
};

export default getDocumentsService;
