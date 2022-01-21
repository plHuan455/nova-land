/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import 'App.scss';
import React, { lazy, Suspense } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Provider } from 'react-redux';
import {
  BrowserRouter, Route, Routes,
} from 'react-router-dom';

import Loading from 'components/atoms/Loading';
import useInitializeRender from 'hooks/useInitializeRender';
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
    path: '/tin-tuc',
    element: <News />,
  },
  {
    path: '/tin-tuc-du-an',
    element: <NewsCategory />,
  },
  {
    path: '/tin-tuc-chi-tiet',
    element: <NewsDetail />,
  },
  {
    path: '/bao-cao-thuong-nien',
    element: <ReportList />,
  },
  {
    path: '/tuyen-dung',
    element: <Recruitment />,
  },
  {
    path: '/danh-sach-tuyen-dung',
    element: <RecruitmentList />,
  },
  {
    path: '/su-kien-chi-tiet',
    element: <EventDetail />,
  },
  {
    path: '/tim-kiem',
    element: <SearchResults />,
  },
  {
    path: '/chi-tiet-tuyen-dung',
    element: <RecruitmentDetail />,
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
        <Route path="/" element={<PageNav />}>
          <Route path=":slug" element={<PageNav />} />
        </Route>
        {routes.map((item, index) => (
          <Route key={`router-${index.toString()}`} {...item} />
        ))}
      </Routes>
    </Suspense>
  );
};

const queryClient = new QueryClient();

const AppWrapper: React.FC = () => (
  <Provider store={store}>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </QueryClientProvider>
  </Provider>
);

export default AppWrapper;
