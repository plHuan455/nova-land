import React from 'react';
import { useTranslation } from 'react-i18next';

import Error from 'components/templates/Error';

const ErrorContainer: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <Error
        statusCode={404}
        btnHomeText={t('general.return_homepage')}
      />
    </>
  );
};

export default ErrorContainer;
