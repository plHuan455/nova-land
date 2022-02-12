import { EventDetailData, ParamNewsEventType } from './type';

import axiosInstance from 'services/common/instance';

export const getNewsEventService = async (
  slug: string,
): Promise<EventDetailData> => {
  const response = await axiosInstance.get(`calendars/${slug}`);
  return response.data.data;
};

export const getRelatedNewsEventService = async (
  params: ParamNewsEventType,
): Promise<EventDetailData[]> => {
  const response = await axiosInstance.get('calendars', { params });
  return response.data.data;
};

export const placeholder = null;
