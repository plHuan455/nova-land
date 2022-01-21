import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import Header from '.';

describe('<Header />', () => {
  test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<BrowserRouter><Header logoSrc="" /></BrowserRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
