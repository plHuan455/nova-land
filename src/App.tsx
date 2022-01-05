import 'App.scss';

import React, { Suspense } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import MainLayoutContainer from 'container/MainLayout';
import Home from 'pages/Home';
import { store } from 'store';

const App: React.FC = () => (
  <Suspense fallback>
    <MainLayoutContainer>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<div />} />
      </Routes>
    </MainLayoutContainer>
  </Suspense>
);

const AppWrapper: React.FC = () => (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

export default AppWrapper;
