import axiosInstance from 'services/common/instance';
import { StaticSlug, RedirectDataTypes } from 'services/navigations/types';

export const getStaticHomeService = async <T>(): Promise<BasePageData<T>> => {
  const response = await axiosInstance.get('pages/static/home-page');
  return response.data.data;
};

export const getPageService = async <T>(
  slug: string,
): Promise<BasePageData<T>> => {
  const response = await axiosInstance.get(`pages/${slug}`);
  return response.data.data;
};

export const getPreviewService = async <T>(token: string): Promise<T> => {
  const response = await axiosInstance.get(`preview/${token}`, {
    baseURL: process.env.REACT_APP_API_SYSTEM_URL,
  });
  return response.data.data;
};

export const getStaticPageService = async (): Promise<StaticSlug[]> => {
  const response = await axiosInstance.get('pages/static/all');
  return response.data.data;
};

export const redirectPageService = async (path: string): Promise<RedirectDataTypes> => {
  const response = await axiosInstance.get(`systems/redirects/show?path=${path}`);
  return response.data.data;
};
