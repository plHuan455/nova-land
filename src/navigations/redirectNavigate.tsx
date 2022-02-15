import React, { useMemo } from 'react';
import { useQuery } from 'react-query';
import { Navigate, Route, useLocation } from 'react-router-dom';

import Loading from 'components/atoms/Loading';
import Error from 'components/templates/Error';
import MainLayout from 'components/templates/MainLayout';
import { getPageService, redirectPageService } from 'services/navigations';
import { DEFAULT_QUERY_OPTION } from 'utils/constants';
import { getBlockData, checkExternalUrl } from 'utils/functions';

interface BlockError {
  link: {
    url: string;
    text: string;
    target: string;
  };
  image: string;
  errorMessage: string;
  sympathySentence: string;
}

const Redirect301:React.FC = () => {
  const { pathname } = useLocation();
  const { isLoading, data } = useQuery(
    ['GetRedirectPageData', pathname],
    () => redirectPageService(pathname),
    DEFAULT_QUERY_OPTION,
  );
  if (isLoading) return <Loading variant="fullScreen" isShow />;

  if (data) {
    const isExternal = checkExternalUrl(data.to);
    if (isExternal) {
      return (
        <Route
          path=""
          element={() => {
            window.location.replace(data.to);
            return null;
          }}
        />
      );
    }
    return (
      <Navigate
        to={{
          pathname: data.to,
        }}
      />
    );
  }

  return <Redirect404 />;
};

export const Redirect404:React.FC = () => {
  const { isLoading, data } = useQuery(
    ['getPageErrorData'],
    () => getPageService('404'),
    DEFAULT_QUERY_OPTION,
  );

  const notFoundBlock = useMemo(
    () => {
      if (data?.blocks) {
        return getBlockData('introduction', data?.blocks) as BlockError;
      }
      return undefined;
    },
    [data?.blocks],
  );

  if (isLoading) return <Loading isShow variant="fullScreen" />;

  return (
    <MainLayout>
      <Error
        btnHomeText={notFoundBlock?.link.text || ''}
        description={notFoundBlock?.sympathySentence || ''}
        titlePage={notFoundBlock?.errorMessage || ''}
        linkButton={notFoundBlock?.link.url || ''}
        targetButton={notFoundBlock?.link.target}
        statusCode={404}
      />
    </MainLayout>
  );
};

const RedirectNavigate: React.FC = () => <Redirect301 />;

export default RedirectNavigate;
