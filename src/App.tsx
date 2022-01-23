import 'App.scss';
import React, { lazy, Suspense } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Provider } from 'react-redux';
import {
  BrowserRouter, Outlet, Route, Routes,
} from 'react-router-dom';

import MainLayoutContainer from 'container/MainLayout';
import useInitializeRender from 'hooks/useInitializeRender';
import AboutUs from 'pages/AboutUs';
import FieldOfActivity from 'pages/FieldOfActivity';
import InvestmentRelations from 'pages/InvestmentRelations';
import News from 'pages/News';
import NewsCategory from 'pages/NewsCategory';
import NewsDetail from 'pages/NewsDetail';
import RecruitmentList from 'pages/RecruitmentList';
import ReportList from 'pages/ReportList';
import { store } from 'store';

const PageNav = lazy(() => import('navigations/PageNav'));

const routes = [
  {
    element: <PageNav />,
    index: true,
  },
  {
    path: 'gioi-thieu',
    element: <AboutUs />,
  },
  {
    path: 'tin-tuc',
    element: <News />,
  },
  {
    path: 'tin-tuc-du-an',
    element: <NewsCategory />,
  },
  {
    path: 'quan-he-dau-tu',
    element: <InvestmentRelations />,
  },
  {
    path: 'linh-vuc-hoat-dong',
    element: <FieldOfActivity />,
  },
  {
    path: 'tin-tuc-chi-tiet',
    element: <NewsDetail />,
  },
  {
    path: '/bao-cao-thuong-nien',
    element: <ReportList />,
  },
  {
    path: 'danh-sach-tuyen-dung',
    element: <RecruitmentList />,
  },
  {
    path: ':slug',
    element: <PageNav />,
  },
];

const App: React.FC = () => {
  useInitializeRender();

  return (
    <Suspense fallback>
      <Routes>
        <Route
          path="/"
          element={(
            <MainLayoutContainer>
              <Outlet />
            </MainLayoutContainer>
        )}
        >
          {routes.map((item, index) => (
            <Route
              key={`router-${index.toString()}`}
              {...item}
            />
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
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </QueryClientProvider>
  </Provider>
);

export default AppWrapper;
