import {
  DocumentsData,
  DocumentParamsType,
  OtherDocumentParamsType,
  OtherDocumentsDataTypes,
  DocumentTypes,
  DocumentsParamsType,
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

export const getAnnualDocumentsService = async (
  params?: OtherDocumentParamsType,
): Promise<APIPaginationResponse<OtherDocumentsDataTypes[]>> => {
  const response = await axiosInstance.get('annual-reports', { params });
  return response.data;
};

export const getDocumentYearService = async (
  params?: DocumentsParamsType,
): Promise<DocumentTypes[]> => {
  const response = await axiosInstance.get('document-years', { params });
  return response.data.data;
};

export const getDocumentCategoryService = async (
  params?: DocumentsParamsType,
): Promise<DocumentTypes[]> => {
  const response = await axiosInstance.get('document-categories', { params });
  return response.data.data;
};

export default getDocumentsService;
