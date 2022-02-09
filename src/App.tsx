/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import 'App.scss';
import React, { lazy, Suspense } from 'react';
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Provider } from 'react-redux';
import {
  BrowserRouter, Outlet, Route, Routes,
} from 'react-router-dom';

import Loading from 'components/atoms/Loading';
import useInitializeRender from 'hooks/useInitializeRender';
import Contact from 'pages/Contact';
import Error from 'pages/Error';
import EventDetail from 'pages/EventDetail';
import News from 'pages/News';
import NewsCategory from 'pages/NewsCategory';
import NewsDetail from 'pages/NewsDetail';
import Recruitment from 'pages/Recruitment';
import RecruitmentDetail from 'pages/RecruitmentDetail';
import RecruitmentList from 'pages/RecruitmentList';
import ReportList from 'pages/ReportList';
import SearchResults from 'pages/SearchResults';
import { store } from 'store';

const PageNav = lazy(() => import('navigations/PageNav'));

const routes = [
  {
    path: 'tin-tuc',
    element: <News />,
  },
  {
    path: 'tin-tuc-du-an',
    element: <NewsCategory />,
  },
  {
    path: 'tin-tuc-chi-tiet/:slug',
    element: <NewsDetail />,
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
    path: 'su-kien-chi-tiet/:slug',
    element: <EventDetail />,
  },
  {
    path: 'tim-kiem',
    element: <SearchResults />,
  },
  {
    path: 'chi-tiet-tuyen-dung',
    element: <RecruitmentDetail />,
  },
  {
    path: 'lien-he',
    element: <Contact />,
  },
  {
    path: '404',
    element: <Error />,
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

const AppWrapper: React.FC = () => (
  <Provider store={store}>
    <QueryClientProvider client={queryClient}>
      <GoogleReCaptchaProvider
        reCaptchaKey="6LcwgsIZAAAAAHZFFWu3icOSaGK2_SVjZwY-kEjQ"
        scriptProps={{
          appendTo: 'head',
          async: true,
          defer: true,
        }}
      >
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </GoogleReCaptchaProvider>
    </QueryClientProvider>
  </Provider>
);

export default AppWrapper;
