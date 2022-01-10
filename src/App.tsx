import 'App.scss';

import React, { Suspense, useEffect } from 'react';
import { Provider } from 'react-redux';
import {
  BrowserRouter, Route, Routes, useLocation,
} from 'react-router-dom';

import MainLayoutContainer from 'container/MainLayout';
import AboutUs from 'pages/AboutUs';
import Home from 'pages/Home';
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
