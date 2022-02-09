import React, { lazy, useMemo } from 'react';

import { useAppSelector } from 'store/hooks';
import {
  convertHomeRoute,
  convertRoute,
  getActiveLanguages,
} from 'utils/language';

const PageNav = lazy(() => import('navigations/PageNav'));

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
        };
      }
      return undefined;
    },
    [dataSystem, activeLangList],
  );

  return { activeLangList, routes };
};

export default useRoutesList;
