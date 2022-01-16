import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import Footer from '.';

describe('<Footer />', () => {
  test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<BrowserRouter><Footer projectOptions={[]} /></BrowserRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
