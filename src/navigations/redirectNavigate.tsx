import { AxiosError } from 'axios';
import React from 'react';

interface RedirectNavigateProps {
  error: unknown;
}

const RedirectNavigate: React.FC<RedirectNavigateProps> = ({ error }) => {
  const errorCode = (error as AxiosError).response?.status || 0;
  if (errorCode >= 500) {
    return <></>;
  }

  return null;
};

export default RedirectNavigate;
