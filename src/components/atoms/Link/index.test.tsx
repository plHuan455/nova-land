import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import Link from '.';

describe('<Link />', () => {
  test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<BrowserRouter><Link href="/" /></BrowserRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
