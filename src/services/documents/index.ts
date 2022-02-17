import {
  DocumentsData,
  DocumentParamsType,
  OtherDocumentParamsType,
  OtherDocumentsDataTypes,
  DocumentTypes,
  DocumentsParamsType,
  OtherDocumentCategoriesTypes,
  OtherDocumentCategoriesDetailParamsTypes,
  OtherDocumentCategoriesDetailTypes,
  AnnualDocumentParamsType,
  AnnualDocumentsDataTypes,
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
  params?: AnnualDocumentParamsType,
): Promise<APIPaginationResponse<AnnualDocumentsDataTypes[]>> => {
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

export const getOtherDocumentCategoriesService = async (
  params?: DocumentsParamsType,
): Promise<APIPaginationResponse<OtherDocumentCategoriesTypes[]>> => {
  const response = await axiosInstance.get('other-document-categories', { params });
  return response.data;
};

export const getOtherDocumentCategoriesDetailService = async (
  id: number,
  params?: OtherDocumentCategoriesDetailParamsTypes,
): Promise<APIPaginationResponse<OtherDocumentCategoriesDetailTypes[]>> => {
  const response = await axiosInstance.get(`other-documents/category/${id}`, { params });
  return response.data;
};

export default getDocumentsService;
