import React from 'react';

import Error from 'components/templates/Error';

const ErrorContainer: React.FC = () => (
  <>
    <Error
      statusCode={404}
      btnHomeText="Trở về trang chủ"
    />
  </>
);

export default ErrorContainer;
