/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import 'App.scss';
import React, {
  lazy,
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
import DetailsPageNav from 'navigations/DetailsPageNav';
import CorporateGovernance from 'pages/CorporateGovernance';
import Error from 'pages/Error';
import Event from 'pages/Event';
import InvestmentRelationsOtherDocument from 'pages/InvestmentRelationsOtherDocument';
import NewsCategory from 'pages/NewsCategory';
import Recruitment from 'pages/Recruitment';
import RecruitmentDetail from 'pages/RecruitmentDetail';
import RecruitmentList from 'pages/RecruitmentList';
import ReportList from 'pages/ReportList';
import { store } from 'store';
import { useAppSelector } from 'store/hooks';

const PageNav = lazy(() => import('navigations/PageNav'));

const routes = [
  {
    path: 'tin-tuc/:slug',
    element: <NewsCategory />,
  },
  {
    path: 'chi-tiet-tin-tuc/:slug',
    element: <DetailsPageNav />,
  },
  {
    path: 'bao-cao-thuong-nien',
    element: <ReportList />,
  },
  {
    path: 'tuyen-dung',
    element: <Recruitment />,
  },
  {
    path: 'co-hoi-nghe-nghiep',
    element: <RecruitmentList />,
  },
  {
    path: 'chi-tiet-su-kien/:slug',
    element: <DetailsPageNav />,
  },
  {
    path: 'chi-tiet-tuyen-dung',
    element: <RecruitmentDetail />,
  },
  {
    path: 'quan-tri-danh-nghiep',
    element: <CorporateGovernance />,
  },
  {
    path: 'tai-lieu-khac',
    element: <InvestmentRelationsOtherDocument />,
  },
  {
    path: '404',
    element: <Error />,
  },
  {
    path: 'lich-su-kien',
    element: <Event />,
  },
  {
    path: ':slug',
    element: <PageNav />,
  },
];

const App: React.FC = () => {
  useInitializeRender();
  return (
    <Suspense fallback={<Loading isShow variant="fullScreen" />}>
      <Routes>
        <Route
          path="/"
          element={(
            <Outlet />
          )}
        >
          <Route path="/" element={<PageNav />}>
            <Route path=":slug" element={<PageNav />} />
          </Route>
          {routes.map((item, index) => (
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
