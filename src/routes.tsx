import React, { lazy, useMemo } from 'react';

import { useAppSelector } from 'store/hooks';
import {
  convertHomeRoute,
  convertRoute,
  getActiveLanguages,
  convertStaticRoute,
} from 'utils/language';

const PageNav = lazy(() => import('navigations/PageNav'));
const DetailsPageNav = lazy(() => import('navigations/DetailsPageNav'));
const NewsCategory = lazy(() => import('pages/NewsCategory'));

const useRoutesList = () => {
  const { dataSystem } = useAppSelector((state) => state.system);

  const activeLangList = useMemo(() => getActiveLanguages(dataSystem?.locales),
    [dataSystem?.locales]);

  const routes = useMemo(
    () => {
      if (dataSystem?.locales) {
        return {
          home: {
            paths: convertHomeRoute(activeLangList),
            element: <PageNav />,
          },
          pages: {
            paths: convertRoute(activeLangList, ':slug'),
            element: <PageNav />,
          },
          newsCategory: {
            paths: convertStaticRoute('NEWS_CATEGORY', activeLangList),
            element: <NewsCategory />,
          },
          newsDetail: {
            paths: convertStaticRoute('NEWS_DETAIL', activeLangList),
            element: <DetailsPageNav />,
          },
          eventDetail: {
            paths: convertStaticRoute('EVENT_DETAIL', activeLangList),
            element: <DetailsPageNav />,
          },
        };
      }
      return undefined;
    },
    [dataSystem, activeLangList],
  );

  return { activeLangList, routes };
};

export default useRoutesList;
