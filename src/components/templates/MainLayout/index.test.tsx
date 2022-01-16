import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import MainLayout from '.';

describe('<MainLayout />', () => {
  test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<BrowserRouter><MainLayout /></BrowserRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
