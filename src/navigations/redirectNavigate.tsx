import React, { useMemo } from 'react';
import { useQuery } from 'react-query';

import Loading from 'components/atoms/Loading';
import Error from 'components/templates/Error';
import MainLayout from 'components/templates/MainLayout';
import { getPageService } from 'services/navigations';
import { DEFAULT_QUERY_OPTION } from 'utils/constants';
import { getBlockData } from 'utils/functions';

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

const RedirectNavigate: React.FC = () => {
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

export default RedirectNavigate;
