import { CalendarData, CalendarParamsType } from './types';

import axiosInstance from 'services/common/instance';

const getCalendarListService = async (
  params?: CalendarParamsType,
): Promise<APIPaginationResponse<CalendarData[]>> => {
  const response = await axiosInstance.get('calendars', { params });
  return response.data;
};

export default getCalendarListService;
