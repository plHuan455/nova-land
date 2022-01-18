import 'App.scss';

import React, { Suspense, useEffect } from 'react';
import { Provider } from 'react-redux';
import {
  BrowserRouter, Route, Routes, useLocation,
} from 'react-router-dom';

import MainLayoutContainer from 'container/MainLayout';
import AboutUs from 'pages/AboutUs';
import FieldOfActivity from 'pages/FieldOfActivity';
import Home from 'pages/Home';
import InvestmentRelations from 'pages/InvestmentRelations';
import News from 'pages/News';
import NewsCategory from 'pages/NewsCategory';
import NewsDetail from 'pages/NewsDetail';
import { store } from 'store';

const App: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <Suspense fallback>
      <MainLayoutContainer>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ve-chung-toi" element={<AboutUs />} />
          <Route path="/tin-tuc" element={<News />} />
          <Route path="/tin-tuc-du-an" element={<NewsCategory />} />
          <Route path="/quan-he-dau-tu" element={<InvestmentRelations />} />
          <Route path="/linh-vuc-hoat-dong" element={<FieldOfActivity />} />
          <Route path="/tin-tuc-chi-tiet" element={<NewsDetail />} />
          <Route path="*" element={<div />} />
        </Routes>
      </MainLayoutContainer>
    </Suspense>
  );
};

const AppWrapper: React.FC = () => (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

export default AppWrapper;
