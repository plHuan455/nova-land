import React, { useMemo } from 'react';
import { useQuery } from 'react-query';
import {
  Navigate, Route, useLocation,
} from 'react-router-dom';

import Loading from 'components/atoms/Loading';
import Error from 'components/templates/Error';
import MainLayout from 'components/templates/MainLayout';
import useLanguage from 'hooks/useLanguage';
import i18n from 'i18n';
import { getPageService, redirectPageService } from 'services/navigations';
import { DEFAULT_QUERY_OPTION } from 'utils/constants';
import { checkExternalUrl, getBlockData } from 'utils/functions';
import { checkExistingPrefixLang } from 'utils/language';

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

const Redirect301: React.FC = () => {
  const { handleChangeLang } = useLanguage();
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
    const preLang = checkExistingPrefixLang(data.to);
    if (preLang !== i18n.language) {
      handleChangeLang({
        label: checkExistingPrefixLang(data.to),
        value: checkExistingPrefixLang(data.to),
      }, () => (
        <Navigate
          to={{
            pathname: data.to,
          }}
        />
      ));
    } else {
      return (
        <Navigate
          to={{
            pathname: data.to,
          }}
        />
      );
    }
  }

  return <Redirect404 />;
};

export const Redirect404: React.FC = () => {
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
