import { ReportDataTypes, ReportParamsTypes } from './types';

import axiosInstance from 'services/common/instance';

export const getReportDataService = async (
  params: ReportParamsTypes,
): Promise<APIPaginationResponse<ReportDataTypes[]>> => {
  const res = await axiosInstance.get('/annual-reports', { params });
  return res.data;
};

export const placeholder = null;
