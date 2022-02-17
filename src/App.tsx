/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import 'App.scss';
import React, {
  Suspense, useEffect, useState,
} from 'react';
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Provider } from 'react-redux';
import {
  BrowserRouter, Outlet, Route, Routes,
} from 'react-router-dom';

import Loading from 'components/atoms/Loading';
import useInitializeRender from 'hooks/useInitializeRender';
import Error from 'pages/Error';
import Recruitment from 'pages/Recruitment';
import RecruitmentDetail from 'pages/RecruitmentDetail';
import RecruitmentList from 'pages/RecruitmentList';
import useRoutesList from 'routes';
import { store } from 'store';
import { useAppSelector } from 'store/hooks';

const staticRoutes = [
  {
    path: 'tuyen-dung',
    element: <Recruitment />,
  },
  {
    path: 'co-hoi-nghe-nghiep',
    element: <RecruitmentList />,
  },
  {
    path: 'chi-tiet-tuyen-dung',
    element: <RecruitmentDetail />,
  },
  {
    path: '404',
    element: <Error />,
  },
];

const App: React.FC = () => {
  useInitializeRender();
  const { routes } = useRoutesList();
  if (!routes) return <Loading variant="fullScreen" />;

  return (
    <Suspense fallback={<Loading isShow variant="fullScreen" />}>
      <Routes>
        <Route
          path="/"
          element={(
            <Outlet />
          )}
        >
          {
            (Object.keys(routes) as Array<keyof typeof routes>).map(
              (ele) => routes[ele].paths.map((item, index) => (
                <Route
                  key={`router-${ele}-${index.toString()}`}
                  path={item}
                  element={routes[ele].element}
                />
              )),
            )
          }
          {staticRoutes.map((item, index) => (
            <Route key={`router-${index.toString()}`} {...item} />
          ))}
        </Route>
      </Routes>
    </Suspense>
  );
};

const queryClient = new QueryClient();

const GoogleReCaptchaWrapper: React.FC = ({ children }) => {
  const [key, setKey] = useState<string>();
  const systemData = useAppSelector((state) => state.system.dataSystem);
  useEffect(() => {
    if (systemData?.googleRecaptchaSiteKey) {
      setKey(systemData?.googleRecaptchaSiteKey);
    }
  }, [systemData]);

  return (
    <GoogleReCaptchaProvider
      reCaptchaKey={key}
      scriptProps={{
        async: true,
        defer: true,
        appendTo: 'head',
      }}
    >
      {children}
    </GoogleReCaptchaProvider>
  );
};

const AppWrapper: React.FC = () => (
  <Provider store={store}>
    <QueryClientProvider client={queryClient}>
      <GoogleReCaptchaWrapper>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </GoogleReCaptchaWrapper>
    </QueryClientProvider>
  </Provider>
);

export default AppWrapper;
